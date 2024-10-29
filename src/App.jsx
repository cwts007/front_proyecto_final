// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Container, Button } from 'react-bootstrap';
import './styles/global.css';

function App() {
  const [user, setUser] = useState(null); // Estado de autenticación
  const [showRegister, setShowRegister] = useState(false); // Controla la vista entre Login y Register

  // Maneja la autenticación
  const handleLogin = (userData) => {
    // Simula autenticación, aquí iría la lógica con el backend
    setUser(userData);
  };

  const handleRegister = (userData) => {
    // Simula registro, aquí iría la lógica con el backend
    setUser(userData);
  };

  // Vista de Login o Register si el usuario no está autenticado
  if (!user) {
    return showRegister ? (
      <Register onRegister={handleRegister} toggle={() => setShowRegister(false)} />
    ) : (
      <Login onLogin={handleLogin} toggle={() => setShowRegister(true)} />
    );
  }

  // Contenido principal después de la autenticación
  return (
    <div className="main-layout">
      <Header />
      <div className="main-content">
        <Container>
          <h1 className="section-title">Bienvenido a Repuestock</h1>
          <p className="section-subtitle">Encuentra los mejores repuestos para tu maquinaria, de forma rápida y confiable.</p>
          <Button className="btn-main" href="#catalog">Ver Catálogo</Button>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default App;
