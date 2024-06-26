const tables = require("../../database/tables");

const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

// Export them to import them somewhere else

module.exports = { browse };
