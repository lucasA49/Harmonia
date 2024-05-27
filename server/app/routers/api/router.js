const express = require("express");

const router = express.Router();

// Import the programs router
const programsRouter = require("./programs/router");

// Use the programs router for routes starting with /programs
router.use("/programs", programsRouter);

// Export the main router
module.exports = router;
