import { useState } from 'react';
import { addConsumo } from '../services/consumoService';

export default function AddConsumo() {
  const [form, setForm] = useState({ mes: '', anio: '', kWh: '' });
  const [mensaje, setMensaje] = useState('');

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addConsumo(1, {
      mes: Number(form.mes),
      anio: Number(form.anio),
      kWh: Number(form.kWh)
    });
    setMensaje('Consumo añadido correctamente');
  }

  return (
    <div>
      <h2>Añadir consumo</h2>
      <form onSubmit={handleSubmit}>
        <input name="mes" placeholder="Mes" value={form.mes} onChange={handleChange} />
        <input name="anio" placeholder="Año" value={form.anio} onChange={handleChange} />
        <input name="kWh" placeholder="kWh" value={form.kWh} onChange={handleChange} />
        <button type="submit">Guardar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}
