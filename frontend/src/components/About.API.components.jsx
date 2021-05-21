import {
  React,
  Chart,
  Navbar,
  ColorStyle,
  TextStyle,
  Row,
  Col,
  Card,
  Button,
} from "../index.import.js";

export default function API() {
  return (
    <div>
      <Navbar />
      <Row>
        <Col>
          <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
            Which APIs does CoronAsylum use?
          </h1>
        </Col>
      </Row>
      <Row>
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
      <Row>
        <Col>
          <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
            The final Solution: Mongodb.com
          </h1>
        </Col>
      </Row>
      <Row>
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
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col xs={2} />
      </Row>
    </div>
  );
}
