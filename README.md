# Proyecto Final - Hito 2 - Desarrollo Frontend

Desafío Latam - Desarrolladores: Cristian Diaz y Christopher Thompson

La página se subió a Vercel:

https://repuestock.vercel.app/

## Descripción
Este proyecto corresponde al Hito 2 del proyecto final de Desafío Latam, donde se construyó el frontend de la aplicación con React. El propósito es crear una tienda en línea de repuestos para maquinaria industrial con la capacidad de explorar productos, gestionar el carrito de compras y administrar direcciones de envío.

## Requerimientos y Cumplimiento

### Creación del Proyecto y Dependencias
Se creó el proyecto usando `npx create-react-app`, y se instalaron dependencias relevantes como React Router, Context API, Ant Design y Bootstrap para un diseño rápido y responsivo.

### Navegación entre Rutas
Implementamos React Router para gestionar la navegación entre las diferentes páginas:

- Inicio (/)
- Tienda (/tienda)
- Carro de Compras (/cart)
- Perfil (/profile)
- Agregar Dirección (/profile/add-address)
- Editar Dirección (/profile/edit-address)

Esta configuración permite al usuario moverse fluidamente entre secciones clave de la aplicación.

### Reutilización de Componentes y Props
- Se crearon componentes reutilizables, como Header y Footer, que se renderizan en todas las páginas.
- En la Tienda, los productos se muestran mediante un componente de tarjeta que recibe props para visualizar detalles específicos como el nombre, precio, descripción y foto de cada producto.

### Uso de Hooks
- Se implementaron `useState` para manejar los estados locales, como los filtros de búsqueda y selección en la Tienda.
- `useEffect` se utilizó para actualizar la lista de productos cuando cambian los filtros.

Estos hooks permiten un desarrollo más dinámico y reactivo, mejorando la interactividad.

### Manejo de Estado Global con Context API
- Se configuró Context API para gestionar el estado global del usuario, proporcionando información accesible en toda la aplicación, como el estado de inicio de sesión y detalles de perfil.
- Esto facilita el acceso a datos compartidos y simplifica la gestión de cambios de estado en componentes anidados.

## Estructura del Proyecto

```plaintext
src/
├── assets/
│   ├── img/
│   │   ├── hero1.png
│   │   ├── hero2.png
│   │   └── hero3.png
├── components/
│   ├── Header.jsx
│   └── Footer.jsx
├── context/
│   └── UserContext.js
├── pages/
│   ├── Home.jsx
│   ├── Tienda.jsx
│   ├── Cart.jsx
│   ├── Profile.jsx
│   ├── AddAddress.jsx
│   └── EditAddress.jsx
└── App.jsx
```

## Instalación y Configuración

Clona este repositorio:

```bash
git clone https://github.com/cwts007/front_proyecto_final.git
```

Navega al directorio del proyecto:

```bash
cd front_proyecto_final
```

Instala las dependencias:

```bash
npm install
```

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Accede a la aplicación en `http://localhost:5173`.

## Funcionalidades Principales

- Inicio: Presenta la hero section con imágenes de la tienda.
- Tienda: Permite explorar productos con filtros de búsqueda por nombre, tipo y marca.
- Carro de Compras: Visualiza los productos agregados al carrito.
- Perfil del Usuario: Permite acceder a la información del usuario y gestionar direcciones de envío.

## Dependencias

- React: Framework principal para la creación de la interfaz de usuario.
- React Router: Navegación entre las rutas de la aplicación.
- Context API: Manejo de estado global para el usuario.
- Ant Design y Bootstrap: Frameworks CSS utilizados para un diseño limpio y responsivo.

## Créditos

Este proyecto fue desarrollado por Christopher Thompson y Cristian Diaz como parte del Hito 2 de Desafío Latam.