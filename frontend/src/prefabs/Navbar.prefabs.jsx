import {
  React,
  Nav,
  Button,
  NavDropdown,
  NavbarStyle,
  useState,
  Dropdown,
} from "../index.import";
import NB from "react-bootstrap/Navbar";
import Login from "./GoogleLogin.prefabs";
import Logout from "./GoogleLogout.prefabs";

export default function Navbar() {
  return (
    <React.Fragment>
      <div>
        <NB bg="primary" variant="dark" sticky="top">
          <NB.Brand href="/">CoronAsylum</NB.Brand>
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link href="/Covid19">Covid-19</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Today">Today</Nav.Link>
            </Nav.Item>
            <NavDropdown
              className={`${NavbarStyle.navitem} ${NavbarStyle.dropdownmenu}`}
              href="/about"
              title="About"
              id="nav-dropdown"
            >
              <NavDropdown.Item eventKey="4.1" href="/about/API">
                API
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.2" href="/about/Database">
                Database
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="4.3" href="/about/Developer">
                Developer
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="4.4">
                View all Documentation
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/Contacts">Contacts</Nav.Link>
            </Nav.Item>
          </Nav>

          <Nav>
            <Nav.Item>
              <Login />
            </Nav.Item>
            <Nav.Item>
              <Logout />
            </Nav.Item>
          </Nav>
        </NB>
      </div>
      <br />
    </React.Fragment>
  );
}

function HoverControlledDropdown(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Dropdown
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onToggle={() => setIsClicked(!isClicked)}
      show={isClicked || isHovered}
    />
  );
}
