const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");
const eventGroupsRoutes = require("./routes/eventGroups.routes");
const sessionsRoutes = require("./routes/sessions.routes");
const attendanceRoutes = require("./routes/attendance.routes");
const exportRoutes = require("./routes/export.routes");

const app = express();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL || true,
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/health", healthRoutes);
app.use("/auth", authRoutes);
app.use("/event-groups", eventGroupsRoutes);
app.use("/sessions", sessionsRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/export", exportRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
