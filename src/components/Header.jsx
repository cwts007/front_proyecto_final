import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ShoppingCartOutlined } from '@ant-design/icons';
import logo from '../assets/img/logo_blanco.png';
import { useNavigate } from 'react-router-dom';
import apiClient from '../config'; // Axios configurado con la URL base

function Header() {
    const [userName, setUserName] = useState(null); // Almacena el nombre del usuario autenticado
    const navigate = useNavigate();

    // Verifica si hay un usuario autenticado al cargar el componente
    useEffect(() => {
        const token = localStorage.getItem('authToken'); // Verifica si hay token en localStorage
        if (token) {
            // Obtén los datos del usuario autenticado
            const fetchUserProfile = async () => {
                try {
                    const response = await apiClient.get('/api/auth/profile', {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    if (response.status === 200) {
                        setUserName(response.data.name); // Actualiza el estado con el nombre del usuario
                    } else {
                        setUserName(null);
                    }
                } catch (error) {
                    console.error('Error al obtener el perfil del usuario:', error);
                    setUserName(null); // Restablece el estado si hay error
                }
            };
            fetchUserProfile();
        } else {
            setUserName(null); // Restablece el estado si no hay token
        }
    }, []);

    // Manejar el cierre de sesión
    const handleLogout = () => {
        localStorage.removeItem('authToken'); // Elimina el token
        setUserName(null); // Restablece el estado del usuario
        navigate('/'); // Redirige al usuario al home
    };

    return (
        <header>
            <Navbar expand="lg" sticky="top" className="navbar-custom">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>
                            <img
                                src={logo}
                                alt="RepueStock Logo"
                                style={{ height: '60px' }}
                            />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>Home</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/tienda">
                                <Nav.Link>Tienda</Nav.Link>
                            </LinkContainer>
                        </Nav>
                        <Nav>
                            <NavDropdown title={userName || 'Cuenta'} id="account-dropdown">
                                {userName ? (
                                    <>
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>Mi Perfil</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={handleLogout}>
                                            Cerrar Sesión
                                        </NavDropdown.Item>
                                    </>
                                ) : (
                                    <>
                                        <LinkContainer to="/login">
                                            <NavDropdown.Item>Iniciar Sesión</NavDropdown.Item>
                                        </LinkContainer>
                                        <LinkContainer to="/register">
                                            <NavDropdown.Item>Registrarse</NavDropdown.Item>
                                        </LinkContainer>
                                    </>
                                )}
                            </NavDropdown>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <ShoppingCartOutlined style={{ fontSize: '20px', marginLeft: '15px' }} />
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
