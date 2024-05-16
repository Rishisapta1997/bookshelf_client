import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar({
    name
}) {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">{name && name.length > 0 ? name : "Default"}</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Add Book</Nav.Link>
                        <Nav.Link href="#features">Delete Book</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default NavBar;