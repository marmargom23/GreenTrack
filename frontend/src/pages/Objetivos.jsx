import { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { getObjetivos, addObjetivo } from '../services/objetivoService';

export default function Objetivos() {
  const [objetivos, setObjetivos] = useState([]);
  const [form, setForm] = useState({ mes: '', anio: '', limite: '' });
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const data = await getObjetivos();
    setObjetivos(data);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addObjetivo({
      mes: Number(form.mes),
      anio: Number(form.anio),
      limite: Number(form.limite)
    });
    setMensaje('Objetivo guardado');
    setForm({ mes: '', anio: '', limite: '' });
    cargar();
  }

  return (
    <>
      <h2>Objetivos</h2>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      <Row>
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title>Histórico de objetivos</Card.Title>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Mes</th>
                    <th>Año</th>
                    <th>Límite kWh</th>
                  </tr>
                </thead>
                <tbody>
                  {objetivos.map(o => (
                    <tr key={o.ObjetivoID}>
                      <td>{o.Mes}</td>
                      <td>{o.Anio}</td>
                      <td>{o.LimiteKWh}</td>
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
              <Card.Title>Definir objetivo</Card.Title>
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
                  <Form.Label>Límite kWh</Form.Label>
                  <Form.Control
                    name="limite"
                    value={form.limite}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
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
