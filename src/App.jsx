import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as jwtDecode from 'jwt-decode'; // Importación segura sin default
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import { Layout, Button, Spin } from 'antd';
import 'antd/dist/reset.css';
import './styles/global.css';
import config from './config';

const { Content } = Layout;

function App() {
  const [user, setUser] = useState(null); // Estado de autenticación
  const [showRegister, setShowRegister] = useState(false); // Controla la vista entre Login y Register
  const [loading, setLoading] = useState(false); // Estado de carga

  // Función para obtener los datos del usuario
  const fetchUserData = async (token) => {
    try {
      setLoading(true); // Activa la carga
      const decoded = jwtDecode(token); // Uso directo de jwtDecode
      const userId = decoded.id;

      // Realiza una solicitud al backend para obtener los datos del usuario
      const response = await axios.get(`${config.API_URL}/api/usuarios/${userId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser({ ...response.data, token });
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    } finally {
      setLoading(false); // Desactiva la carga
    }
  };

  const handleLogin = (userData) => {
    fetchUserData(userData.token);
  };

  const handleRegister = (userData) => {
    fetchUserData(userData.token);
  };

  if (loading) {
    return (
      <Layout style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Spin size="large" />
      </Layout>
    );
  }

  if (!user) {
    return showRegister ? (
      <Register onRegister={handleRegister} toggle={() => setShowRegister(false)} />
    ) : (
      <Login onLogin={handleLogin} toggle={() => setShowRegister(true)} />
    );
  }

  return (
    <Layout className="main-layout" style={{ minHeight: '100vh' }}>
      <Header userName={user.name} />
      <Content style={{ padding: '24px', textAlign: 'center' }}>
        <h1>Bienvenido a Repuestock</h1>
        <p>Encuentra los mejores repuestos para tu maquinaria, de forma rápida y confiable.</p>
        <Button type="primary" href="#catalog">
          Ver Catálogo
        </Button>
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
