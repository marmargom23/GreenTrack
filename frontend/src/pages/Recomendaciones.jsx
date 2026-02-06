import { useEffect, useState } from 'react';
import { Table, Form, Button, Row, Col, Alert, Card } from 'react-bootstrap';
import { getRecomendaciones, addRecomendacion } from '../services/recomendacionService';

export default function Recomendaciones() {
  const [recs, setRecs] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [texto, setTexto] = useState('');

  useEffect(() => {
    cargar();
  }, []);

  async function cargar() {
    const data = await getRecomendaciones();
    setRecs(data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await addRecomendacion(texto);
    setMensaje('Recomendación añadida');
    setTexto('');
    cargar();
  }

  return (
    <>
      <h2>Recomendaciones</h2>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      <Row>
        <Col md={7}>
          <Card>
            <Card.Body>
              <Card.Title>Histórico</Card.Title>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Mensaje</th>
                  </tr>
                </thead>
                <tbody>
                  {recs.map(r => (
                    <tr key={r.RecomendacionID}>
                      <td>{r.Fecha}</td>
                      <td>{r.Mensaje}</td>
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
              <Card.Title>Nueva recomendación</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={texto}
                    onChange={e => setTexto(e.target.value)}
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
