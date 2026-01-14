const router = require("express").Router();
const requireAuth = require("../middleware/requireAuth");
const controller = require("../controllers/sessions.controller");

// host only
router.get("/:id/share", requireAuth, controller.share);
router.get("/:id", requireAuth, controller.getById);

module.exports = router;
