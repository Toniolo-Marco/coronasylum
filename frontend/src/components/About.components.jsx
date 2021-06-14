import { useParams } from "react-router";
import {
  React,
  Navbar,
  ColorStyle,
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
        <Container style={{ minHeight: "100vh", paddingBottom: "2%" }}>
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
                <Card.Body>
                  <Card.Title>DBMS</Card.Title>
                  <Card.Text>
                    DBMS is the software that manage the DataBase, it get the
                    results of a query and return them to us
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
          <h2 className={`${ColorStyle.colorWhite1}`}>Our API</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{ marginTop: "2%" }}
            className={` ${ColorStyle.colorGrey5}`}
          >
            Our data are essentially provided by{" "}
            <a href="https://covid19api.com/">Covid19 API</a>, this has saved us
            a lot of work, as the COVID19 API team has already grouped data from
            most countries in the world and constantly updates it.
            <br />
            <br />
            However, we had to develop our own API as theirs was limited to a
            few calls per minute. Also for this reason we had to implement both
            our database and a self-updating system. In this way the back end
            updates our DB with the new data and at the same time serves the
            front end, without any limitation of calls.
            <br />
            <br />
            To view and download the code just click on the Documentation tab.
          </p>
        </Col>
      </Row>
    </div>
  );
}

function Database() {
  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col>
          <h2 className={`${ColorStyle.colorWhite1}`}>
            How we set up the DataBase
          </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{ marginTop: "2%" }}
            className={` ${ColorStyle.colorGrey5}`}
          >
            To implement our DataBase we choose{" "}
            <a href="https://www.mongodb.com/">MongoDB</a>. It is "a general
            purpose, document-based, distributed database built for modern
            application developers and for the cloud era."
            <br />
            <br />
            It is faster than a normal DB and even simple. MongoDB is a NoSQL
            database and uses filters to execute queries. It stores data in
            JSON-like documents and it does not require the use of foreign keys.
            In this way the DB is composed of several tables that are not
            strictly linked to each other.
          </p>
        </Col>
      </Row>
    </div>
  );
}

function Developer() {
  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col>
          <h2 className={`${ColorStyle.colorWhite1}`}>Developer</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{ marginTop: "2%" }}
            className={` ${ColorStyle.colorGrey5}`}
          >
            Hi, my name is Marco, I'm 19 and I live in Italy. CoronAsylum is the
            project for my final high school exam. Developing this web-app allowed
            me to learn a lot of new aspects of webapps coding. Anyway my goal was not only to learn, but 
            to do something useful for everyone: create a tool
            that anyone, from anywhere in the world, could use.
            <br />
            <br />A special thanks goes to my cousin, Umberto, who was able to
            advise me in the most critical parts of the development. Moreover,
            if this project is online, it is also thanks to my family, who
            supported me during these months.
            <br />
            <br />
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className={`${ColorStyle.colorWhite1}`}>School & Experience</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{ marginTop: "2%" }}
            className={` ${ColorStyle.colorGrey5}`}
          >
            As I said, I am in the fifth and final year of computer science at
            the{" "}
            <a href="https://cerebotani.it/joomla/index.php">IIS Cerebotani</a>{" "}
            high school. During the third year I had the opportunity to do an
            internship with a local company. There I dealt more with the
            hardware, preparing the computers that the company lent for special
            occasions. Also during those thirty days I worked alongside the
            technician, with him I repaired several PCs and tidied up the entire
            warehouse.
            <br />
            <br />
            In the fourth year I spent my internship in a Web
            Marketing company. They mainly deal with SEO positioning, e-commerce
            and marketing strategies. There I learnt{" "}
            <a href="https://wordpress.com/">WordPress</a> and its huge ecosystem.
            In particular, I have dedicated myself to several e-commerce websites,
            publishing hundreds of articles and customizing the aesthetics with
            CSS. Initially use WordPress was complicated, in fact it is about
            configuration and settings, not coding at all. However, this last
            experience helped me find work the following year.
            <br />
            <br />
            During the summer I worked for three months in another
            company that designs websites. There I exploited my skills and created
            dozens of sites for companies all over Italy by myself.
            Unfortunately, due to the covid outbreak, things got complicated and I wasn't able to extend 
            my experience further.
          </p>
        </Col>
      </Row>
    </div>
  );
}

function Documentation() {
  return (
    <div style={{ marginTop: "5%" }}>
      <Row>
        <Col>
          <h2 className={`${ColorStyle.colorWhite1}`}>Documentation</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <p
            style={{ marginTop: "2%" }}
            className={` ${ColorStyle.colorGrey5}`}
          >
            for security reasons the code is not yet public. You can contact me
            at this email:{" "}
            <a href="mailto:coronasylum@gmail.com">coronasylum@gmail.com</a> if
            you want to receive a copy, or wait for it to be published here.
            Inside the email I kindly ask you to specify the reason for the
            request. Otherwise your email will not receive a reply.
            <br />
            <br />
            In case of a bug or any problem with the site, I invite you to
            describe it in an email, our team will fix it in a few days.
            <br />
            <br />
            For any other information do not hesitate to contact us, we will try
            to reply as soon as possible.
          </p>
        </Col>
      </Row>
    </div>
  );
}
