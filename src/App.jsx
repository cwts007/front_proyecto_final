import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container, Button } from 'react-bootstrap';
import './styles/global.css';

function App() {
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
