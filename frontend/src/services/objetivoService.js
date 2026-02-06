import api from './api';

export async function getObjetivos() {
  const res = await api.get('/objetivos');
  return res.data;
}

export async function addObjetivo(obj) {
  const res = await api.post('/objetivos', obj);
  return res.data;
}
