import {
  React,
  Jumbotron,
  Col,
  Row,
  ColorStyle,
  Button,
} from "../index.import";
import { IoWarningOutline } from "react-icons/io5";

export default function NotAuthorized() {
  return (
    <div
      style={{
        background: "linear-gradient(#303030, #000000)",
        minHeight: "100vh",
        marginTop: "-5%",
        marginRight: "-1%",
        marginLeft: "-1%",
        zIndex: "100",
      }}
    ></div>
  );
}
