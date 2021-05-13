import React from "react";
import NB from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/esm/NavDropdown";

export default function MyNavbar() {
  return (
    <React.Fragment>
      <div>
        <NB bg="primary" variant="dark" sticky="top">
          <NB.Brand href="#home">CoronaSylum</NB.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="#covid">Covid-19</Nav.Link>
            </Nav.Item>
            <NavDropdown title="About" id="nav-dropdown">
              <NavDropdown.Item eventKey="4.1">API</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2">Database</NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3">Me</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                View all Documentation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="#contacts">Contacts</Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav>
            <Nav.Item>
              <Nav.Link href="#login">Sign In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Button
                variant="outline-light"
                title="Create your account to access more data"
              >
                Sign Up
              </Button>
            </Nav.Item>
          </Nav>
        </NB>
      </div>
      <br />
    </React.Fragment>
  );
}
