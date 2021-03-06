import {
  React,
  Nav,
  NavDropdown,
  NavbarStyle,
  Authentication,
  Logout,
  Login,
} from "../index.import";
import NB from "react-bootstrap/Navbar";

export default function Navbar() {
  return (
    <Authentication.Consumer>
      {(value) => (
        <div>
          <NB bg="primary" variant="dark" sticky="top">
            <NB.Brand href="/">CoronAsylum</NB.Brand>
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link href="/explore">Explore</Nav.Link>
              </Nav.Item>
              <NavDropdown
                className={`${NavbarStyle.navitem} ${NavbarStyle.dropdownmenu}`}
                href="/about"
                title="About"
                id="nav-dropdown"
              >
                <NavDropdown.Item eventKey="4.1" href="/about/api">
                  API
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2" href="/about/db">
                  Database
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3" href="/about/developer">
                  Developer
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4" href="/about/documentation">
                  Documentation & Contacts
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <React.Fragment>
              <Nav>
                {value.user && value.user.tokenId === undefined && (
                  <Nav.Item>
                    <Login />
                  </Nav.Item>
                )}
                {value.user && value.user.tokenId && (
                  <div style={{ display: "flex" }}>
                    <Nav.Item>
                      <img
                        style={{
                          padding: "auto",
                          borderRadius: "50%",
                          height: "42px",
                          width: "42px",
                          marginRight: "10px",
                        }}
                        alt="a pic"
                        src={value.user.profile.imageUrl}
                      />
                    </Nav.Item>
                    <Nav.Item>
                      <Logout />
                    </Nav.Item>
                  </div>
                )}
              </Nav>
            </React.Fragment>
          </NB>
          <br />
        </div>
      )}
    </Authentication.Consumer>
  );
}
