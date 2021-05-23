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
  const { Counter, start, pauseResume, reset, update } = useCountUp({
    duration: params.duration,
    end: obj.end,
    start: 0,
    delay: 1,
    redraw: true,
  });

  return (
    <React.Fragment>
      <div>{Counter}</div>
    </React.Fragment>
  );
}

function setUpDates(data, params) {
  //params.status
  var arr = data
    .filter((_, i, arr) => i >= arr.length - 7)
    .map((e) => e[params.status]);

  const eachday = [];
  for (let i = arr.length - 1; i > 0; i--) {
    eachday[i - 1] = arr[i] - arr[i - 1];
  }
  //24h 60min 60sec
  //86400
  const eachsec = [];
  for (let i = 0; i < eachday.length; i++) {
    eachsec[i] = eachday[i] / 86400;
  }
  console.log(arr);
  console.log(eachday);
  console.log(eachsec);
  var obj = {
    end: 200,
    secondPerUpdate: 2,
  };
  return obj;
}
