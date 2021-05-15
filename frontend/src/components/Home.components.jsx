import {
  React,
  Chart,
  Navbar,
  ColorStyle,
  TextStyle,
  Row,
  Col,
  Jumbotron,
  Button,
  Container,
  FormControl,
  InputGroup,
  SearchIcon,
} from "../index.import.js";
//import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <Container fluid>
        <Row>
          <Col xs={1} />
          <Col></Col>

          <Col>
            <h1 className={`${ColorStyle.colorWhite1}`}>
              CoronAsylum: From Everywhere To Everyone
            </h1>

            <h2 className={`${ColorStyle.colorBlue1}`}>—</h2>

            <p
              className={`${TextStyle.txtcenterjustify} ${ColorStyle.colorGrey5}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <br />
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Search here..."
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button variant="primary">
                  <SearchIcon />
                </Button>{" "}
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col xs={1} />
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={1} />
          <Col>
            <h2 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              Bad at Math? We don't care.
            </h2>
            <br />
            <p className={`${TextStyle.txtcenter} ${ColorStyle.colorGrey5}`}>
              Speed is everything nowadays. Our team has developed several types
              of graphs to facilitate the understanding of numbers and trends:
            </p>
          </Col>
          <Col xs={1} />
        </Row>

        <br />
        <br />
        <Row>
          <Col xs={6}>
            <h3 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              Cartesian:
            </h3>
            <p className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              quickly understand the trend
            </p>
            <Chart
              params={{
                status: "Confirmed",
                country: "Italy",
                type: "line",
                label: "Chart of Coronavirus Confirmed Cases in ",
                backgroundColor: "rgba(0,123,252,0.5)",
                borderColor: "rgba(0,123,252,1)",
                pointRadius: 0,
                responsive: true,
                tooltips: {
                  enabled: true,
                  intersect: false,
                },
              }}
            />
          </Col>
          <Col xs={6}>
            <h3 className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              Cartesian:
            </h3>
            <p className={`${TextStyle.txtcenter} ${ColorStyle.colorWhite1}`}>
              compare total cases, recovered and deaths
            </p>
            <Chart
              params={{
                status: "Confirmed",
                country: "Brazil",
                type: "line",
                label: "Chart of Coronavirus Confirmed Cases in ",
                backgroundColor: "rgba(0,123,252,0.5)",
                borderColor: "rgba(0,123,252,1)",
                pointRadius: 0,
                responsive: true,
                tooltips: {
                  enabled: true,
                  intersect: false,
                },
              }}
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={1} />
          <Col>
            <h3 className={`${ColorStyle.colorWhite1}`}>Real Time counter:</h3>
            <p className={` ${ColorStyle.colorGrey5}`}>
              Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
              tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute
              iure reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint obcaecat cupiditat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
          <Col xs={7}></Col>
          <Col xs={1} />
        </Row>
        <br />
        <br />
        <br />
        <Row>
          <Col xs={2} />
          <Col>
            <Jumbotron className={`${ColorStyle.bgGrey3}`}>
              <h1>What's Covid-19?</h1>
              <h5>
                It's remarkable for everyone to be aware about what's going on
                out there. You can learn more on our website just pressing the
                button below!
              </h5>
              <Button href="/covid19" variant="primary">
                Learn more
              </Button>
            </Jumbotron>
          </Col>
          <Col xs={2} />
        </Row>

        {/*
      <GeneralChart
        params={{
          casetype: "Death",
          country: "usa",
          type: "line",
          label: "Chart of Coronavirus death in ",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          borderColor: "rgba(255, 99, 132,1)",
          pointRadius: 0,
          responsive: true,
          tooltips: {
            enabled: true,
            intersect: false,
          },
        }}
      />
      */}
      </Container>
    </React.Fragment>
  );
}