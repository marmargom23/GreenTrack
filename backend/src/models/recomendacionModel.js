const pool = require('../db');

async function getRecomendaciones(usuarioId) {
  const [rows] = await pool.query(
    "SELECT * FROM Recomendaciones WHERE UsuarioID = ? ORDER BY Fecha DESC",
    [usuarioId]
  );
  return rows;
}

async function addRecomendacion(usuarioId, mensaje) {
  const [result] = await pool.query(
    "INSERT INTO Recomendaciones (UsuarioID, Mensaje, Fecha) VALUES (?, ?, CURDATE())",
    [usuarioId, mensaje]
  );
  return result.insertId;
}

module.exports = { getRecomendaciones, addRecomendacion };
