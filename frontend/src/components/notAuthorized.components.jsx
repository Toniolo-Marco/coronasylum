import { React, Col, Row, Alert, Login, Container } from "../index.import";

export default function NotAuthorized() {
  return (
    <div
      style={{
        background: "linear-gradient(#303030, #000000)",
        minHeight: "100vh",
        marginRight: "-5%",
        marginLeft: "-5%",
        zIndex: "100",
        display: "flex",
      }}
    >
      <Row
        style={{
          width: "100%",
          marginTop: "auto",
          marginBottom: "auto",
        }}
      >
        <Col md={4} xs={1} />
        <Col md={4} xs={10}>
          <Alert variant="dark">
            <Alert.Heading>Oh no!</Alert.Heading>
            <p>It seems you haven't logged in yet, please login to view data</p>
            <hr />
            <Login />
          </Alert>
        </Col>
        <Col md={4} xs={1} />
      </Row>
    </div>
  );
}
