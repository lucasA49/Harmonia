const express = require('express')

const router = express.Router()

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// eslint-disable-next-line import/no-useless-path-segments
const categoriesRouter = require('../../routers/api/categories/routeur'); // Chemin mis à jour

// Utiliser le routeur des catégories
router.use('/categories', categoriesRouter);

/* ************************************************************************* */

module.exports = router;
