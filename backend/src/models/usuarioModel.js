const pool = require('../db');

async function crearUsuario(nombre, email, passwordHash) {
  const [result] = await pool.query(
    "INSERT INTO Usuarios (Nombre, Email, PasswordHash) VALUES (?, ?, ?)",
    [nombre, email, passwordHash]
  );
  return result.insertId;
}

async function buscarPorEmail(email) {
  const [rows] = await pool.query(
    "SELECT * FROM Usuarios WHERE Email = ?",
    [email]
  );
  return rows[0];
}

module.exports = { crearUsuario, buscarPorEmail };
