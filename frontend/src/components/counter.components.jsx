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
import moment from "moment";

const setEnd = (data, status, casesPerSecond) => {
  if (data && data.length && data.length > 0) {
    const lastday = data[data.length - 1];
    const time = moment(lastday.Date);
    const now = moment();
    let delta = Math.abs(now.diff(time, "seconds"));
    //console.log(delta, casesPerSecond);
    delta = Math.floor(delta * casesPerSecond);
    return lastday[status] + delta;
  } else {
    return 0;
  }
};

export default function Counter({ data, params, ...rest }) {
  const casesPerSecond = setUpDates(data, params);
  const [value, setValue] = useState(0);
  const end = setEnd(data, params.status, casesPerSecond);

  useEffect(() => {
    if (value < end - 1111) {
      setTimeout(() => {
        setValue(value + 1111);
      }, 1);
    } else if (value > end - 1111 && value < end) {
      setTimeout(() => {
        setValue(value + 1);
      }, 1);
    } else {
      setTimeout(() => {
        setValue(value + 1);
      }, 1000 / casesPerSecond);
    }
  }, [value, setValue]);

  let char = String.fromCharCode(value);
  console.log(char);
  console.log("ciao");
  var digits = [];

  for (var i = 0; i < char.length; i++) {
    digits.push(<div id="counterDigit">{char.charAt(i)}</div>);
  }

  return (
    <React.Fragment>
      <div id="counterContainer" style={{ color: "white" }}>
        {digits}
      </div>
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
  // console.log(arr);
  // console.log(eachday);
  // console.log(eachsec);

  const avg =
    eachsec.reduce((acc, val) => {
      return acc + val;
    }, 0) / eachsec.length;

  return avg;
}
