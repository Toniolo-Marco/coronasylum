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
              <Api />
            </Tab>
            <Tab eventKey="Developer" title="Developer">
              <Api />
            </Tab>
            <Tab eventKey="Documentation" title="Documentation">
              <Api />
            </Tab>
          </Tabs>
        </Container>
      </div>
    </React.Fragment>
  );
}

function Api() {
  return (
    <div>
      <Card style={{ width: "18rem" }} className={`${ColorStyle.bgGrey4}`}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>What's an API?</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
    </div>
  );
}
