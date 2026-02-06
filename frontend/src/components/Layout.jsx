import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children }) {
  const { logout } = useAuth();

  return (
    <Container fluid>
      <Row>
        <Col md={2} className="bg-light vh-100 p-3">
          <h3>GreenTrack</h3>
          <Nav className="flex-column">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/consumo">Mi consumo</Nav.Link>
            <Nav.Link as={Link} to="/objetivos">Objetivos</Nav.Link>
            <Nav.Link as={Link} to="/recomendaciones">Recomendaciones</Nav.Link>
            <Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>
          </Nav>
        </Col>
        <Col md={10} className="p-4">
          {children}
        </Col>
      </Row>
    </Container>
  );
}
