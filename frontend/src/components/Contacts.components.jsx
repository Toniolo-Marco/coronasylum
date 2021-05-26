import {
  React,
  Navbar,
  Form,
  ColorStyle,
  TextStyle,
  Row,
  Col,
  Container,
} from "../index.import.js";
//import Button from "react-bootstrap/Button";

export default function Contacts() {
  return (
    <div>
      <Navbar />
      <Container>
        <h1 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
          Contacts us at: CoronAsylum
        </h1>
        <Row>
          <Col></Col>
          <Col xs={10}>
            <h5
              className={`${TextStyle.txtjustifycenter}  ${ColorStyle.colorGrey5}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h5>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </div>
  );
}
