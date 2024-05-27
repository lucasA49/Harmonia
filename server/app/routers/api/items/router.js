const express = require("express");
// pour eslint
const router = express.Router();

// Import item-related actions
const { browse, read, add } = require("../../../controllers/programActions");

// Route to get a list of items
router.get("/", browse);

// Route to get a specific item by ID
router.get("/api/programs", read);

// Route to add a new item
router.post("/", add);

module.exports = router;
