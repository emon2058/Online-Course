import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="mr-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                        <Nav.Link href="services">Services</Nav.Link>
                        <Nav.Link href="about">About</Nav.Link>
                        <Nav.Link href="signup">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="header">
                <h1>ONLINE LEARNING</h1>
                <h1>Learn Everyday</h1>
                <p>Learning something new every day is one of the top ways to keep the mind sharp. The brain is like a muscle and needs to be exercised</p>
            </div>
        </div>
    );
};

export default Header;