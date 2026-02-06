import { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { getConsumo, addConsumo } from '../services/consumoService';

export default function Consumo() {
  const [consumo, setConsumo] = useState([]);
  const [form, setForm] = useState({ mes: '', anio: '', kWh: '' });
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const data = await getConsumo();
    setConsumo(data);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addConsumo({
      mes: Number(form.mes),
      anio: Number(form.anio),
      kWh: Number(form.kWh)
    });
    setMensaje('Consumo añadido correctamente');
    setForm({ mes: '', anio: '', kWh: '' });
    cargar();
  }

  return (
    <>
      <h2>Mi consumo</h2>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      <Row>
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title>Histórico</Card.Title>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Mes</th>
                    <th>Año</th>
                    <th>kWh</th>
                  </tr>
                </thead>
                <tbody>
                  {consumo.map(c => (
                    <tr key={c.ConsumoID}>
                      <td>{c.Mes}</td>
                      <td>{c.Anio}</td>
                      <td>{c.kWh}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Añadir consumo</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label>Mes</Form.Label>
                  <Form.Control
                    name="mes"
                    value={form.mes}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>Año</Form.Label>
                  <Form.Control
                    name="anio"
                    value={form.anio}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-2">
                  <Form.Label>kWh</Form.Label>
                  <Form.Control
                    name="kWh"
                    value={form.kWh}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" variant="success">
                  Guardar
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}
