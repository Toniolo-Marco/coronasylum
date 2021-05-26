import {
  React,
  Navbar,
  ColorStyle,
  TextStyle,
  Row,
  Col,
  Card,
  Button,
  DivStyle,
} from "../index.import.js";

export default function API() {
  return (
    <div>
      <Navbar />
      <Row className={`${DivStyle.marginBottom2}`}>
        <Col>
          <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
            Which APIs does CoronAsylum use?
          </h1>
        </Col>
      </Row>
      <Row className={`${DivStyle.marginBottom5}`}>
        <Col>
          <h6 className={` ${TextStyle.txtcenter} ${ColorStyle.colorGrey5}`}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
        <Col></Col>
      </Row>
      <Row className={`${DivStyle.marginBottom2}`}>
        <Col>
          <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
            The final Solution: Mongodb.com
          </h1>
        </Col>
      </Row>
      <Row className={`${DivStyle.marginBottom5}`}>
        <Col></Col>
        <Col>
          <h6 className={` ${TextStyle.txtcenter} ${ColorStyle.colorGrey5}`}>
            Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
            tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
            iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt
            in culpa qui officia deserunt mollit anim id est laborum.
          </h6>
        </Col>
      </Row>
      <Row>
        <Col xs={2} />
        <Col>
          <Card style={{ width: "18rem" }} className={`${ColorStyle.bgGrey4}`}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>What's an API?</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
        <Col>
          <Card style={{ width: "18rem" }} className={`${ColorStyle.bgGrey4}`}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>What's an API?</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
        <Col>
          <Card style={{ width: "18rem" }} className={`${ColorStyle.bgGrey4}`}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>More about databases</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button
                variant="primary"
                target="_blank "
                href="https://www.oracle.com/database/what-is-database/"
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
}
