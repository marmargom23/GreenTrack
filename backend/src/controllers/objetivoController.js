const objetivoModel = require('../models/objetivoModel');

async function getObjetivos(req, res) {
  const data = await objetivoModel.getObjetivos(req.usuarioId);
  res.json(data);
}

async function createObjetivo(req, res) {
  const { limite, mes, anio } = req.body;
  const id = await objetivoModel.addObjetivo(req.usuarioId, limite, mes, anio);
  res.json({ id });
}

module.exports = { getObjetivos, createObjetivo };
