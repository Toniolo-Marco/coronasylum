import { React, Col, Row, Alert, Login } from "../index.import";

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
          marginTop: "auto",
          marginBottom: "auto",
          width: "100%",
        }}
      >
        <Col xs={4} />
        <Col xs={4}>
          <Alert variant="dark">
            <Alert.Heading>Oh no!</Alert.Heading>
            <p>It seems you haven't logged in yet, please login to view data</p>
            <hr />
            <Login />
          </Alert>
        </Col>
        <Col xs={4} />
      </Row>
    </div>
  );
}
