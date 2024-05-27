const express = require("express")

const router = express.Router()

// Import the action from programActions.js
const { browse } = require("../../../controllers/programActions");

// Route to get the list of programs
router.get("/", browse);

// Export the router
module.exports = router;
