const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({ status: "ok", service: "attendance-backend" });
});

module.exports = router;
