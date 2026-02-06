const recomendacionModel = require('../models/recomendacionModel');

async function getRecomendaciones(req, res) {
  const data = await recomendacionModel.getRecomendaciones(req.usuarioId);
  res.json(data);
}

async function createRecomendacion(req, res) {
  const { mensaje } = req.body;
  const id = await recomendacionModel.addRecomendacion(req.usuarioId, mensaje);
  res.json({ id });
}

module.exports = { getRecomendaciones, createRecomendacion };
