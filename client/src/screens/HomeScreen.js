import { Col, Container, Image, Row } from 'react-bootstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Product from '../components/Product';
import { listProducts } from '../actions/productActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <Image src={require('../banner2.png')} fluid />
      <Container>
        <h2 className='my-3'>Latest Resources</h2>
        <div className='input-group my-3 mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Search for Resources'
            aria-label='Search for Resources'
            aria-describedby='button-addon2'
          />
          <button className='btn btn-primary' type='button' id='button-addon2'>
            Search
          </button>
        </div>
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
