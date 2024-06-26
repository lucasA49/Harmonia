const express = require("express");

const router = express.Router();
const { browse } = require("../../../controllers/programActions");

// Route pour récupérer la liste des catégories
router.get("/", browse);

// Route pour récupérer une catégorie par ID

module.exports = router;
