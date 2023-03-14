import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

const HomeScreen = () => {
  return (
    <>
      <h2>Latest Resources</h2>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xlg={2}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
