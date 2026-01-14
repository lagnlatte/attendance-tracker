const prisma = require("../db");

// Determine if an event is OPEN or CLOSED based on time
function computeStatus(event) {
  const start = new Date(event.date);
  const end = new Date(event.date);

  const [sh, sm] = event.startTime.split(":").map(Number);
  const [eh, em] = event.endTime.split(":").map(Number);

  start.setHours(sh, sm, 0, 0);
  end.setHours(eh, em, 0, 0);

  const now = new Date();

  return now >= start && now <= end ? "OPEN" : "CLOSED";
}

// GET /event-groups, list event groups for logged-in host
exports.list = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const groups = await prisma.eventGroup.findMany({
      where: { hostId: req.user.id },
      include: {
        sessions: {
          select: {
            id: true,
            date: true,
            startTime: true,
            endTime: true,
            status: true,
            _count: { select: { attendances: true } },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    const result = groups.map((group) => {
      // recompute statuses
      const sessionsWithStatus = group.sessions.map((s) => ({
        ...s,
        status: computeStatus(s),
      }));

      const sessionsCompleted = sessionsWithStatus.filter(
        (s) => s.status === "CLOSED" && new Date(s.date) < new Date()
      ).length;

      const sortedDates = group.sessions
        .map((s) => new Date(s.date))
        .sort((a, b) => a - b);

      const attendanceTotal = sessionsWithStatus.reduce(
        (sum, s) => sum + (s._count?.attendances || 0),
        0
      );

      return {
        id: group.id,
        name: group.name,
        sessionsCount: group.sessionsCount,
        sessionsCompleted,
        dateStarted: sortedDates[0] ?? null,
        dateFinished: sortedDates[sortedDates.length - 1] ?? null,
        startTime: group.startTime,
        endTime: group.endTime,
        days: group.days,
        attendanceTotal,
      };
    });

    res.json(result);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

// GET /event-groups/:id, view a single event group
exports.getById = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const group = await prisma.eventGroup.findFirst({
      where: { id: req.params.id, hostId: req.user.id },
      include: { sessions: true },
    });

    if (!group) {
      return res.status(404).json({ error: "Event group not found" });
    }

    const sessions = group.sessions.map((s) => ({
      ...s,
      status: computeStatus(s),
    }));

    res.json({ ...group, sessions });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

// POST /event-groups, create event group and generate sessions, all CLOSED initially
exports.create = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const { name, sessionsCount, days, startTime, endTime } = req.body;

    if (
      !name ||
      !sessionsCount ||
      !Array.isArray(days) ||
      !days.length ||
      !startTime ||
      !endTime
    ) {
      return res.status(400).json({ error: "Missing fields" });
    }

    const group = await prisma.eventGroup.create({
      data: {
        name,
        sessionsCount: Number(sessionsCount),
        days,
        startTime,
        endTime,
        hostId: req.user.id,
      },
    });

    // generate sessions weekly, CLOSED by default
    const sessions = [];
    let current = new Date();

    while (sessions.length < sessionsCount) {
      const dayName = current.toLocaleDateString("en-US", { weekday: "short" });

      if (days.includes(dayName)) {
        sessions.push({
          eventGroupId: group.id,
          date: new Date(current),
          startTime,
          endTime,
          status: "CLOSED",
          accessCode: Math.floor(100000 + Math.random() * 900000).toString(),
        });
      }
      // iterate through the calendar day by day
      current.setDate(current.getDate() + 1);
    }

    await prisma.event.createMany({ data: sessions });

    res.status(201).json(group);
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE /event-groups/:id
exports.remove = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const group = await prisma.eventGroup.findFirst({
      where: { id: req.params.id, hostId: req.user.id },
    });

    if (!group) {
      return res.status(404).json({ error: "Event group not found" });
    }

    await prisma.attendance.deleteMany({
      where: { event: { eventGroupId: group.id } },
    });

    await prisma.event.deleteMany({
      where: { eventGroupId: group.id },
    });

    await prisma.eventGroup.delete({
      where: { id: group.id },
    });

    res.json({ ok: true });
  } catch {
    res.status(500).json({ error: "Server error" });
  }
};
