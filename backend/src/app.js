const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/health.routes");
const authRoutes = require("./routes/auth.routes");

const app = express();

// Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/health", healthRoutes);
app.use("/auth", authRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
