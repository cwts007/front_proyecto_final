// src/pages/Home.jsx
import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    return (
        <div style={{ margin: 0, padding: 0 }}>
            <Carousel fade interval={5000}>
                {/* Primera diapositiva */}
                <Carousel.Item>
                    <div
                        style={{
                            position: 'relative',
                            height: '100vh',
                            backgroundImage: `url(/hero1.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                zIndex: 1,
                            }}
                        ></div>

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                color: 'white',
                                textAlign: 'center',
                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                            }}
                        >
                            <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>Bienvenido a RepueStock</h1>
                            <p style={{ fontSize: '1.2em', maxWidth: '600px', marginBottom: '1em' }}>
                                Encuentra los mejores repuestos para maquinaria de alta calidad y confiabilidad.
                            </p>
                            <Button variant="primary" size="lg" onClick={() => navigate('/tienda')}>
                                Ver Productos
                            </Button>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Segunda diapositiva */}
                <Carousel.Item>
                    <div
                        style={{
                            position: 'relative',
                            height: '100vh',
                            backgroundImage: `url(/hero2.png)`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                zIndex: 1,
                            }}
                        ></div>

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                color: 'white',
                                textAlign: 'center',
                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                            }}
                        >
                            <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>Tu Almacén de Confianza</h1>
                            <p style={{ fontSize: '1.2em', maxWidth: '600px', marginBottom: '1em' }}>
                                Almacenamos y proveemos repuestos de maquinaria con los más altos estándares de calidad.
                            </p>
                            <Button variant="primary" size="lg" onClick={() => navigate('/tienda')}>
                                Explorar Repuestos
                            </Button>
                        </div>
                    </div>
                </Carousel.Item>

                {/* Tercera diapositiva */}
                <Carousel.Item>
                    <div
                        style={{
                            position: 'relative',
                            height: '100vh',
                            backgroundImage: `url(/hero3.png)`, // Ruta de la imagen nueva en public
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                                zIndex: 1,
                            }}
                        ></div>

                        <div
                            style={{
                                position: 'relative',
                                zIndex: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%',
                                color: 'white',
                                textAlign: 'center',
                                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.8)',
                            }}
                        >
                            <h1 style={{ fontSize: '3em', marginBottom: '0.5em' }}>Alianzas con los Mejores Servicios Técnicos</h1>
                            <p style={{ fontSize: '1.2em', maxWidth: '600px', marginBottom: '1em' }}>
                                Contamos con alianzas estratégicas para ofrecerte los mejores servicios de reparación industrial.
                            </p>
                            <Button variant="primary" size="lg" onClick={() => navigate('/tienda')}>
                                Conoce Nuestros Socios
                            </Button>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
