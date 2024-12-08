import React from "react";
import { Form, Input, Button, Card, message } from "antd";
import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { apiClient } from "../config"; // Importar cliente Axios

function Login() {
  const navigate = useNavigate(); // Hook para redirigir al usuario

  const onFinish = async (values) => {
    try {
      const response = await apiClient.post("/api/auth/login", values); // Solicitud al backend
      localStorage.setItem("authToken", response.data.token); // Guardar token en localStorage
      message.success("Inicio de sesión exitoso");
      navigate("/tienda"); // Redirigir a la página de la tienda
    } catch (error) {
      message.error("Error al iniciar sesión. Verifica tus credenciales.");
    }
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Error al completar el formulario.");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card title="Iniciar Sesión" style={{ width: 300 }}>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Correo"
            name="email"
            rules={[{ required: true, message: "Por favor ingresa tu correo" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Por favor ingresa tu contraseña" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
