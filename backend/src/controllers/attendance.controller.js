const prisma = require("../db");

function getLocalStartEnd(event) {
  const d = new Date(event.date);

  const [sh, sm] = event.startTime.split(":").map(Number);
  const [eh, em] = event.endTime.split(":").map(Number);

  // build start/end using LOCAL calendar day (avoids UTC shift)
  const start = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    sh,
    sm,
    0,
    0
  );
  const end = new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    eh,
    em,
    0,
    0
  );

  return { start, end };
}

function computeStatus(event) {
  const { start, end } = getLocalStartEnd(event);
  const now = new Date();
  return now >= start && now <= end ? "OPEN" : "CLOSED";
}

// POST /attendance/check-in, participant checks in using access code
exports.checkIn = async (req, res) => {
  try {
    const { code } = req.body;

    if (!code) {
      return res.status(400).json({ error: "Missing code" });
    }

    const event = await prisma.event.findUnique({
      where: { accessCode: code },
    });

    if (!event) {
      return res.status(404).json({ error: "Invalid code" });
    }

    // compute OPEN / CLOSED (timezone-safe)
    const { start, end } = getLocalStartEnd(event);
    const now = new Date();

    if (now < start || now > end) {
      return res.status(403).json({ error: "Session is not open" });
    }

    const attendance = await prisma.attendance.create({
      data: {
        eventId: event.id,
        userId: req.user.id,
      },
    });

    res.status(201).json({
      eventId: event.id,
      checkInTime: attendance.checkInTime,
    });
  } catch (e) {
    if (e.code === "P2002") {
      return res.status(409).json({ error: "Already checked in" });
    }
    res.status(500).json({ error: "Server error" });
  }
};

// GET /attendance/event-group/:eventGroupId, host views attendance for an event group
exports.listForEventGroup = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const sessions = await prisma.event.findMany({
      where: { eventGroupId: req.params.eventGroupId },
      orderBy: { date: "desc" },
      include: {
        eventGroup: { select: { name: true } },
        attendances: {
          include: {
            user: { select: { id: true, name: true, email: true } },
          },
        },
      },
    });

    const result = sessions.map((s) => ({
      id: s.id,
      eventName: s.eventGroup.name,
      date: s.date,
      startTime: s.startTime,
      endTime: s.endTime,
      status: computeStatus(s), // dynamic OPEN/CLOSED
      attendance: s.attendances.length,
      attendees: s.attendances.map((a) => ({
        id: a.user.id,
        name: a.user.name,
        email: a.user.email,
        checkIn: a.checkInTime,
      })),
    }));

    res.json(result);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
};
