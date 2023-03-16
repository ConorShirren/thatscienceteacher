import React, { useState, useEffect } from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <Image src={require('../banner2.png')} fluid />
      <Container>
        <h2 className='my-3'>Latest Resources</h2>
        <div class='input-group my-3 mb-3'>
          <input
            type='text'
            class='form-control'
            placeholder='Search for Resources'
            aria-label='Search for Resources'
            aria-describedby='button-addon2'
          />
          <button class='btn btn-primary' type='button' id='button-addon2'>
            Search
          </button>
        </div>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xlg={2}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
