const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const consumoRoutes = require('./routes/consumoRoutes');
const objetivoRoutes = require('./routes/objetivoRoutes');
const recomendacionRoutes = require('./routes/recomendacionRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/consumo', consumoRoutes);
app.use('/api/objetivos', objetivoRoutes);
app.use('/api/recomendaciones', recomendacionRoutes);

app.listen(process.env.PORT, () => {
  console.log("Backend escuchando en puerto " + process.env.PORT);
});
