
const express = require("express");


const router = express.Router();


/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const categoriesRouter = require("./categories/routeur");

router.use("/categories", categoriesRouter);

const programsRouter = require("./programs/router"); // Chemin mis à jour

 router.use("/programs", programsRouter);

/* ************************************************************************* */

module.exports = router;
