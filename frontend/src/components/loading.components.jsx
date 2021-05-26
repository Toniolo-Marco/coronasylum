import { React, Spinner, LoadingStyle } from "../index.import.js";

export default function Loading() {
  return (
    <React.Fragment>
      <div className={`${LoadingStyle.spinnerDimension}`}>
        <Spinner animation="border" variant="primary" />
      </div>
    </React.Fragment>
  );
}
