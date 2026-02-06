import { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { login as loginService } from '../services/authService';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await loginService(email, password);
      login(data.token);
      navigate('/');
    } catch {
      setError('Credenciales incorrectas');
    }
  }

  return (
    <Card className="mx-auto mt-5" style={{ maxWidth: '400px' }}>
      <Card.Body>
        <Card.Title>Iniciar sesión</Card.Title>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
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
          <Button type="submit" variant="success" className="w-100">
            Entrar
          </Button>
        </Form>
        <div className="mt-3">
          <small>¿No tienes cuenta? <Link to="/register">Regístrate</Link></small>
        </div>
      </Card.Body>
    </Card>
  );
}
