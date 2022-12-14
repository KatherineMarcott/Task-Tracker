const express = require("express");
const router = express.Router();
const homeController = require('../controllers/home');

// Main Routes
router.get("/", homeController.getIndex);
router.post("/createTask", homeController.createTask)
router.delete("/deleteTask/:id", homeController.deleteTask)

module.exports = router;