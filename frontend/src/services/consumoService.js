import api from './api';

export async function getConsumo() {
  const res = await api.get('/consumo');
  return res.data;
}

export async function addConsumo(consumo) {
  const res = await api.post('/consumo', consumo);
  return res.data;
}
