const express = require('express')

const router = express.Router();
const { getCategories, getCategoryById } = require('../../../controllers/categoryActions');

// Route pour récupérer la liste des catégories
router.get('../../../controllers/categoryActions.js', getCategories);

// Route pour récupérer une catégorie par ID
router.get('/:id', getCategoryById);

router.get('/', getCategories);
module.exports = router;
