// src/App.jsx
import React from 'react';
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

function App() {
  return (
    <Router>
      <Header />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
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
