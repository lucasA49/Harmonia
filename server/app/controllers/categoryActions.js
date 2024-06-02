// Some data to make the trick
const categories = [
    {
        id: 1,
        name: "Science-Fiction",
    },
    {
        id: 2,
        name: "Comédie",
    },
];

// Contrôleur pour récupérer la liste des catégories
const getCategories = (req, res) => {
    res.json(categories);
};

// Contrôleur pour récupérer une catégorie par ID
const getCategoryById = (req, res) => {
    const categoryId = parseInt(req.params.id, 10);
    const category = categories.find(cat => cat.id === categoryId);
    if (category) {
        res.json(category);
    } else {
        res.status(404).send('Category not found');
    }
};

// Exporter les contrôleurs
module.exports = {
    getCategories,
    getCategoryById,
};
