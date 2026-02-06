import api from './api';

export async function getRecomendaciones() {
  const res = await api.get('/recomendaciones');
  return res.data;
}

export async function addRecomendacion(mensaje) {
  const res = await api.post('/recomendaciones', { mensaje });
  return res.data;
}
