import { React, Spinner, LoadingStyle, Row } from "../index.import.js";

export default function Loading() {
  return (
    <React.Fragment>
      <Row>
        <div className={`${LoadingStyle.spinnerDimension}`}>
          <Spinner animation="border" variant="primary" />
        </div>
      </Row>
    </React.Fragment>
  );
}
