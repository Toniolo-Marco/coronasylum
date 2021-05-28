import { useParams } from "react-router";
import {
  React,
  Navbar,
  ColorStyle,
  TextStyle,
  useEffect,
  Row,
  Nav,
  Container,
  useState,
} from "../index.import.js";

const initialActive = {
  API: false,
  Database: false,
  Developer: false,
  Documentaion: false,
};

export default function About() {
  const [active, setActive] = useState(initialActive);
  let { tab } = useParams();
  useEffect(() => {
    switch (tab) {
      case "API":
        loadAPI(active, setActive);
        break;
      case "Database":
        loadDatabase(active, setActive);
        break;
      case "Developer":
        loadDeveloper(active, setActive);
        break;
      case "Documentation":
        loadDocumentation(active, setActive);
      default:
        break;
    }
  }, []);
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Container style={{ minHeight: "100vh" }}>
          <Row
            style={{
              marginTop: "20px",
              borderBottom: "1px solid white",
            }}
          >
            <Nav
              style={{ border: "none" }}
              variant="tabs"
              defaultActiveKey={(tab) => {
                switch (tab) {
                  case "API":
                    loadAPI(active, setActive);
                    break;
                  case "Database":
                    loadDatabase(active, setActive);
                    break;
                  case "Developer":
                    loadDeveloper(active, setActive);
                    break;
                  case "Documentation":
                    loadDocumentation(active, setActive);
                  default:
                    break;
                }
              }}
              onSelect={(e) => {
                switch (e) {
                  case "API":
                    loadAPI(active, setActive);
                    break;
                  case "Database":
                    loadDatabase(active, setActive);
                    break;
                  case "Developer":
                    loadDeveloper(active, setActive);
                    break;
                  case "Documentation":
                    loadDocumentation(active, setActive);
                  default:
                    break;
                }
              }}
            >
              <Nav.Item>
                <Nav.Link id="API" eventKey="API" active={active.API}>
                  API
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="Database" active={active.Database}>
                  Database
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="Developer" active={active.Developer}>
                  Developer
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link eventKey="Documentation" active={active.Documentaion}>
                  Documentation
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Row>
          <Row id="idtab" style={{ marginTop: "50px" }}></Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

function loadAPI(active, setActive) {
  active = initialActive;
  setActive({ ...active, API: true });
  document.getElementById("idtab").innerHTML = `<h1 style="color: white"
    >
      API
    </h1>
    <h6 style="color: #c8c8c8">
      Lorem ipsum dolor sit amet, consectetur adipisci elit,
      sed eiusmod tempor incidunt ut labore et dolore magna
      aliqua. Ut enim ad minim veniam, quis nostrum
      exercitationem ullam corporis suscipit laboriosam, nisi
      ut aliquid ex ea commodi consequatur. Quis aute iure
      reprehenderit in voluptate velit esse cillum dolore eu
      fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
      non proident, sunt in culpa qui officia deserunt mollit
      anim id est laborum.
    </h6>`;
}

function loadDeveloper(active, setActive) {
  active = initialActive;
  setActive({ ...active, Developer: true });
  document.getElementById("idtab").innerHTML = `<h1 style="color: white"
  >
    Developer
  </h1>
  <h6 style="color: #c8c8c8">
    Lorem ipsum dolor sit amet, consectetur adipisci elit,
    sed eiusmod tempor incidunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrum
    exercitationem ullam corporis suscipit laboriosam, nisi
    ut aliquid ex ea commodi consequatur. Quis aute iure
    reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
    non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.
  </h6>`;
}

function loadDatabase(active, setActive) {
  active = initialActive;
  setActive({ ...active, Database: true });
  document.getElementById("idtab").innerHTML = `<h1 style="color: white"
  >
    Database
  </h1>
  <h6 style="color: #c8c8c8">
    Lorem ipsum dolor sit amet, consectetur adipisci elit,
    sed eiusmod tempor incidunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrum
    exercitationem ullam corporis suscipit laboriosam, nisi
    ut aliquid ex ea commodi consequatur. Quis aute iure
    reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
    non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.
  </h6>`;
}

function loadDocumentation(active, setActive) {
  active = initialActive;
  setActive({ ...active, Documentation: true });
  document.getElementById("idtab").innerHTML = `<h1 style="color: white"
  >
    Documentation 
  </h1>
  <h6 style="color: #c8c8c8">
    Lorem ipsum dolor sit amet, consectetur adipisci elit,
    sed eiusmod tempor incidunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrum
    exercitationem ullam corporis suscipit laboriosam, nisi
    ut aliquid ex ea commodi consequatur. Quis aute iure
    reprehenderit in voluptate velit esse cillum dolore eu
    fugiat nulla pariatur. Excepteur sint obcaecat cupiditat
    non proident, sunt in culpa qui officia deserunt mollit
    anim id est laborum.
  </h6>`;
}
