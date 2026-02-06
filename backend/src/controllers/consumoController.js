const consumoModel = require('../models/consumoModel');

async function getConsumo(req, res) {
  const data = await consumoModel.getConsumoByUsuario(req.usuarioId);
  res.json(data);
}

async function createConsumo(req, res) {
  const { mes, anio, kWh } = req.body;
  const id = await consumoModel.addConsumo({
    usuarioId: req.usuarioId,
    mes,
    anio,
    kWh
  });
  res.json({ id });
}

module.exports = { getConsumo, createConsumo };
