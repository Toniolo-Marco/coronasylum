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
  Histogram,
  ImageStyle,
  useState,
  downloadData,
  useEffect,
} from "../index.import.js";
import { useCountUp } from "react-countup";

export default function Counter({ data, params, ...rest }) {
  const obj = setUpDates(data, params);
  const { CountUp, start, pauseResume, reset, update } = useCountUp({
    duration: params.duration,
    end: obj.end,
    start: 0,
    delay: 1,
    redraw: true,
  });

  return (
    <React.Fragment>
      <div>{CountUp}</div>
    </React.Fragment>
  );
}

function setUpDates(data, params) {
  //params.status
  var arr = data
    .filter((_, i, arr) => i >= arr.length - 5)
    .map((e) => e[params.status]);

  var obj = {
    end: 200,
    secondPerUpdate: 2,
  };
  return obj;
}
