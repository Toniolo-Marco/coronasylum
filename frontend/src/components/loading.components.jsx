import {
  React,
  Row,
  Col,
  Container,
  useState,
  useEffect,
  Spinner,
} from "../index.import.js";

export default function Loading() {
  return (
    <React.Fragment>
      <Spinner animation="border" variant="primary" />
    </React.Fragment>
  );
}
