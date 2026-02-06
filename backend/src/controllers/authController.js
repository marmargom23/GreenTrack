const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const usuarioModel = require('../models/usuarioModel');
require('dotenv').config();

async function register(req, res) {
  try {
    const { nombre, email, password } = req.body;

    const existe = await usuarioModel.buscarPorEmail(email);
    if (existe) {
      return res.status(400).json({ error: "Email ya registrado" });
    }

    const hash = await bcrypt.hash(password, 10);

    const id = await usuarioModel.crearUsuario(nombre, email, hash);

    res.json({ usuarioId: id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el registro" });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const usuario = await usuarioModel.buscarPorEmail(email);
    if (!usuario) {
      return res.status(400).json({ error: "Credenciales incorrectas" });
    }

    const ok = await bcrypt.compare(password, usuario.PasswordHash);

    if (!ok) {
      return res.status(400).json({ error: "Credenciales incorrectas" });
    }

    const token = jwt.sign(
      { usuarioId: usuario.UsuarioID },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error en el login" });
  }
}

module.exports = { register, login };
