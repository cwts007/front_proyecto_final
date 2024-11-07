// src/components/Footer.jsx
import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="navbar-custom text-white text-center py-2">
            <Container fluid>
                <small>&copy; {new Date().getFullYear()} RepueStock. Todos los derechos reservados.</small>
            </Container>
        </footer>
    );
}

export default Footer;
