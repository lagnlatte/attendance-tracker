const prisma = require("../db");
const { Parser } = require("json2csv");
const ExcelJS = require("exceljs");

exports.exportCSV = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const { sessionIds } = req.body;

    const attendances = await prisma.attendance.findMany({
      where: { eventId: { in: sessionIds } },
      include: {
        user: { select: { name: true, email: true } },
        event: { select: { date: true } },
      },
    });

    const rows = attendances.map((a) => ({
      name: a.user.name,
      email: a.user.email,
      sessionDate: a.event.date,
      checkInTime: a.checkInTime,
    }));

    const parser = new Parser();
    const csv = parser.parse(rows);

    res.header("Content-Type", "text/csv");
    res.attachment("attendance.csv");
    res.send(csv);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
};

exports.exportXLSX = async (req, res) => {
  try {
    if (req.user.role !== "host") {
      return res.status(403).json({ error: "Only hosts allowed" });
    }

    const { sessionIds } = req.body;

    const attendances = await prisma.attendance.findMany({
      where: { eventId: { in: sessionIds } },
      include: {
        user: { select: { name: true, email: true } },
        event: { select: { date: true } },
      },
    });

    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Attendance");

    sheet.columns = [
      { header: "Name", key: "name" },
      { header: "Email", key: "email" },
      { header: "Session Date", key: "date" },
      { header: "Check-in Time", key: "checkIn" },
    ];

    attendances.forEach((a) => {
      sheet.addRow({
        name: a.user.name,
        email: a.user.email,
        date: a.event.date,
        checkIn: a.checkInTime,
      });
    });

    res.header(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.attachment("attendance.xlsx");

    await workbook.xlsx.write(res);
    res.end();
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Server error" });
  }
};
