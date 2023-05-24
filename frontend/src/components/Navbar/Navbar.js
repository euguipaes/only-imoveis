import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/img/logo-white.png";
import { Link } from "react-router-dom";

function NavBar() {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <Navbar bg="transparent" expand="lg" variant="dark" className="navbar">
      <Container id="dashboard">
        <Navbar.Brand href="#dashboard">
          <img src={logo} id="logonav" alt="logo onlyimoveis" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/home">Dashboard</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/clientes">Clientes</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/imoveis">Imoveis</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/contratos">Contratos</Link>
            </Nav.Link>
            <Nav.Link Text="Sair" onClick={() => [signout(), navigate("/")]}>
              Sair
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
