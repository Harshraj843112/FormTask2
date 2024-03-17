const express = require("express");
const router = express.Router();
const authController = require("../controllers/registerController");

// Register Route
router.post("/register", authController.register);

module.exports = router;
