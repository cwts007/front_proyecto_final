import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Tienda from './pages/Tienda';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import CreateProduct from './pages/CreateProduct';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import EditAddress from './pages/EditAddress';
import AddAddress from './pages/AddAddress';
import Header from './components/Header';
import Footer from './components/Footer';
import { message } from 'antd';

function App() {
  const [cart, setCart] = useState([]); // Estado del carrito

  // Agregar producto al carrito
  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { product, quantity: 1 }]);
    }
    message.success(`${product.name} agregado al carrito`);
  };

  // Actualizar cantidad de un producto en el carrito
  const handleUpdateCart = (productId, quantity) => {
    setCart(cart.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    ));
    message.success('Cantidad actualizada');
  };

  // Eliminar producto del carrito
  const handleRemoveFromCart = (productId) => {
    setCart(cart.filter((item) => item.product.id !== productId));
    message.success('Producto eliminado del carrito');
  };

  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/tienda"
            element={<Tienda onAddToCart={handleAddToCart} />} // Pasar función de agregar al carrito
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cart} // Pasar el carrito al componente
                onUpdateCart={handleUpdateCart} // Pasar función de actualizar
                onRemoveFromCart={handleRemoveFromCart} // Pasar función de eliminar
              />
            }
          />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/edit-address" element={<EditAddress />} />
          <Route path="/profile/add-address" element={<AddAddress />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
