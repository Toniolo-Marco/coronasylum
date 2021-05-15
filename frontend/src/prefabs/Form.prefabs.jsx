import { React, ColorStyle, Col, Row } from "../index.import";
import { Form as F } from "react-bootstrap";

export default function Form() {
  return (
    <React.Fragment>
      <div>
        <F>
          <Row>
            <Col>
              <F.Group controlId="exampleF.ControlInput1">
                <F.Label className={`${ColorStyle.colorWhite1}`}>
                  Frist name
                </F.Label>
                <F.Control placeholder="John" />
              </F.Group>
            </Col>
            <Col>
              <F.Group controlId="exampleF.ControlInput1">
                <F.Label className={`${ColorStyle.colorWhite1}`}>
                  Last name
                </F.Label>
                <F.Control placeholder="Smith" />
              </F.Group>
            </Col>
          </Row>
          <F.Group controlId="exampleF.ControlInput1">
            <F.Label className={`${ColorStyle.colorWhite1}`}>
              Email address
            </F.Label>
            <F.Control type="email" placeholder="name@example.com" />
          </F.Group>

          <F.Group controlId="exampleF.ControlTextarea1">
            <F.Label className={`${ColorStyle.colorWhite1}`}>Subject</F.Label>
            <F.Control type="text" placeholder="Subject..." />
          </F.Group>

          <F.Group controlId="exampleF.ControlTextarea1">
            <F.Label className={`${ColorStyle.colorWhite1}`}>
              Your Message
            </F.Label>
            <F.Control
              as="textarea"
              rows={3}
              placeholder="Write your message here..."
            />
          </F.Group>
        </F>
      </div>
    </React.Fragment>
  );
}
