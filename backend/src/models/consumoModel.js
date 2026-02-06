const pool = require('../db');

async function getConsumoByUsuario(usuarioId) {
  const [rows] = await pool.query(
    'SELECT * FROM ConsumoEnergetico WHERE UsuarioID = ? ORDER BY Anio, Mes',
    [usuarioId]
  );
  return rows;
}

async function addConsumo({ usuarioId, mes, anio, kWh }) {
  const [result] = await pool.query(
    'INSERT INTO ConsumoEnergetico (UsuarioID, Mes, Anio, kWh) VALUES (?, ?, ?, ?)',
    [usuarioId, mes, anio, kWh]
  );
  return result.insertId;
}

module.exports = { getConsumoByUsuario, addConsumo };
