import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import CartScreen from './screens/CartScreen';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import React from 'react';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Routes>
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/cart/:id?' element={<CartScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/cart' element={<HomeScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
