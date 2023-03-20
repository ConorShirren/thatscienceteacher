import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Header></Header>
      <main className='py-3'>
        <Routes>
          <Route path='/product/:id' element={<ProductScreen />} />
          <Route path='/login' element={<HomeScreen />} />
          <Route path='/cart' element={<HomeScreen />} />
          <Route path='/' element={<HomeScreen />} />
        </Routes>
      </main>
      <Footer></Footer>
    </Router>
  );
};

export default App;
