import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="py-4 text-center">
            <Container>
                <p>© 2023 Repuestock. Todos los derechos reservados.</p>
                <p>
                    <a href="#facebook">Facebook</a> | <a href="#twitter">Twitter</a> | <a href="#instagram">Instagram</a>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;
