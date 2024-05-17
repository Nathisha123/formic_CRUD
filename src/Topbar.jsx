import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Topbar() {
    const navigate = useNavigate();

    return (
        <>
        <Navbar expand="md" style={{ backgroundColor: 'Black' }}>
          <Container style={{ textAlign: 'center', padding: '15px' }}>
            <Navbar.Brand style={{ color: 'white', fontSize: '24px' }}><b>Library Management System</b></Navbar.Brand>
          </Container>
          <Nav className="ms-auto">
            <Button variant="link" onClick={() => navigate('/')} style={{ backgroundColor: 'orange', border:'none',textDecoration: 'none', color:'white', fontSize: '15px',  }}>Home</Button> &nbsp;
            <Button variant="link" onClick={() => navigate('/dashboard-author')} style={{ backgroundColor: 'grey',color: 'white', textDecoration: 'none', fontSize: '18px',  }}>Authors Dashboard</Button>
          </Nav>
        </Navbar>
      </>
      
    );
}

export default Topbar;