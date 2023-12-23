import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

const NotFound = () => {
  return (
    <Container style={styles.container}>
      <Row>
        <Col xs="12" className="text-center">
          <h1 style={styles.heading}>404 - Not Found</h1>
          <p style={styles.message}>The page you are looking for might be in another universe.</p>
          <Link to="/" style={styles.link}>Go to Home</Link>
        </Col>
      </Row>
    </Container>
  );
};

const styles = {
  container: {
    marginTop: '50px',
  },
  heading: {
    fontSize: '3rem',
    color: '#333',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1.2rem',
    color: '#007BFF',
    textDecoration: 'none',
  },
};

export default NotFound;
