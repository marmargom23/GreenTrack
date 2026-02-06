const pool = require('../db');

async function getObjetivos(usuarioId) {
  const [rows] = await pool.query(
    "SELECT * FROM Objetivos WHERE UsuarioID = ? ORDER BY Anio, Mes",
    [usuarioId]
  );
  return rows;
}

async function addObjetivo(usuarioId, limite, mes, anio) {
  const [result] = await pool.query(
    "INSERT INTO Objetivos (UsuarioID, LimiteKWh, Mes, Anio) VALUES (?, ?, ?, ?)",
    [usuarioId, limite, mes, anio]
  );
  return result.insertId;
}

module.exports = { getObjetivos, addObjetivo };
