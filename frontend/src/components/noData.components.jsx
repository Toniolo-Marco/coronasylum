import { React, Jumbotron, Col, Row, ColorStyle } from "../index.import";
import { IoWarningOutline } from "react-icons/io5";

export default function NoData() {
  return (
    <div>
      <Row style={{ marginTop: "5%", marginBottom: "5%" }}>
        <Col xs={2} />
        <Col>
          <Jumbotron className={`${ColorStyle.bgGrey3}`}>
            <div style={{ display: "flex" }}>
              <IoWarningOutline
                style={{
                  fontSize: "4em",
                  marginTop: "auto",
                  marginBottom: "auto",
                  marginRight: "3%",
                }}
              />
              <h1>Sorry, no data available!</h1>
            </div>
            <br />
            <h5>
              We are sorry, there are no data available for this country.
              Probably it is in the middle of nowhere or the government did not
              reported any cases of the virus. Come back here tomorrow, maybe
              you'll be luckier.
            </h5>
          </Jumbotron>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
}
