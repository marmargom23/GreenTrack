import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { register as registerService } from '../services/authService';
import { useNavigate, Link } from 'react-router-dom';

export default function Register() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ok, setOk] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await registerService(nombre, email, password);
      setOk('Usuario registrado. Ahora puedes iniciar sesión.');
      setError('');
      setTimeout(() => navigate('/login'), 1500);
    } catch {
      setError('No se ha podido registrar');
      setOk('');
    }
  }

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <Card.Body>
        <Card.Title>Registro</Card.Title>
        {ok && <Alert variant="success">{ok}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              value={nombre}
              onChange={e => setNombre(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Correo</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button type="submit" variant="primary" className="w-100">
            Registrarse
          </Button>
        </Form>
        <div className="mt-3">
          <small>¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link></small>
        </div>
      </Card.Body>
    </Card>
  );
}
