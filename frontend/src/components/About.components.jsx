import { useParams } from "react-router";
import {
  React,
  Navbar,
  ColorStyle,
  TextStyle,
  useEffect,
  Row,
  Tab,
  Tabs,
  Col,
  Button,
  Card,
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
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <div>
        <Navbar />
        <Container style={{ minHeight: "100vh" }}>
          <Tabs defaultActiveKey={tab} id="uncontrolled-tab-example">
            <Tab eventKey="API" title="API">
              <Api />
            </Tab>
            <Tab eventKey="Database" title="Database">
              <Database />
            </Tab>
            <Tab eventKey="Developer" title="Developer">
              <Developer />
            </Tab>
            <Tab eventKey="Documentation" title="Documentation">
              <Documentation />
            </Tab>
          </Tabs>
          <Row style={{ marginTop: "10%", marginBottom: "5%" }}>
            <Col xs={4}>
              <Card
                style={{ width: "18rem" }}
                className={`${ColorStyle.bgGrey4}`}
              >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Non-Relational Database</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    target="_blank "
                    href="https://www.mongodb.com/non-relational-database#:~:text=Non%2Drelational%20databases%20(often%20called,on%20data%20structures%20like%20documents."
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                style={{ width: "18rem" }}
                className={`${ColorStyle.bgGrey4}`}
              >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>What's an API?</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    target="_blank "
                    href="https://www.redhat.com/en/topics/api/what-are-application-programming-interfaces"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={4}>
              <Card
                style={{ width: "18rem" }}
                className={`${ColorStyle.bgGrey4}`}
              >
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Database Management System</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="primary"
                    target="_blank "
                    href="https://www.mongodb.com/database-management-system"
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

function Api() {
  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col>
          <h2 className={`${ColorStyle.colorWhite1}`}>Our API:</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className={` ${ColorStyle.colorGrey5}`}>TESTO API BLA BLA BLA</p>
        </Col>
      </Row>
    </div>
  );
}

function Database() {
  return <div style={{ marginTop: "10%" }}></div>;
}

function Developer() {
  return <div style={{ marginTop: "10%" }}></div>;
}

function Documentation() {
  return <div style={{ marginTop: "10%" }}></div>;
}
