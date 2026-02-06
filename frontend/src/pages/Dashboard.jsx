import { useEffect, useState } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { getConsumo } from '../services/consumoService';
import { getObjetivos } from '../services/objetivoService';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function Dashboard() {
  const [consumo, setConsumo] = useState([]);
  const [objetivos, setObjetivos] = useState([]);

  useEffect(() => {
    getConsumo().then(setConsumo);
    getObjetivos().then(setObjetivos);
  }, []);

  const labels = consumo.map(c => `${c.Mes}/${c.Anio}`);
  const data = {
    labels,
    datasets: [
      {
        label: 'Consumo kWh',
        data: consumo.map(c => c.kWh),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.2
      }
    ]
  };

  const ultimoConsumo = consumo[consumo.length - 1];
  const ultimoObjetivo = objetivos[objetivos.length - 1];

  return (
    <>
      <h2>Dashboard</h2>
      <Row className="mb-3">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Último consumo</Card.Title>
              <Card.Text>
                {ultimoConsumo
                  ? `${ultimoConsumo.kWh} kWh (${ultimoConsumo.Mes}/${ultimoConsumo.Anio})`
                  : 'Sin datos'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Objetivo actual</Card.Title>
              <Card.Text>
                {ultimoObjetivo
                  ? `${ultimoObjetivo.LimiteKWh} kWh (${ultimoObjetivo.Mes}/${ultimoObjetivo.Anio})`
                  : 'Sin objetivo definido'}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card>
        <Card.Body>
          <Card.Title>Evolución del consumo</Card.Title>
          <Line data={data} />
        </Card.Body>
      </Card>
    </>
  );
}
