import {
  React,
  useState,
  useEffect,
  CounterContainer,
  DigitContainer,
} from "../index.import.js";
import moment from "moment";

const setEnd = (data, status, casesPerSecond) => {
  const lastday = data[data.length - 1];
  const time = moment(lastday.Date);
  const now = moment();
  let delta = Math.abs(now.diff(time, "seconds"));
  //console.log(delta, casesPerSecond);
  delta = Math.floor(delta * casesPerSecond);
  //console.log(delta);
  //console.log(lastday[status], delta, lastday[status] + delta);
  return lastday[status] + delta;
};

export default function Counter({ data, params, ...rest }) {
  const casesPerSecond = setUpDates(data, params);
  const [value, setValue] = useState(0);
  const end = setEnd(data, params.status, casesPerSecond);
  //console.log(end);
  const [startUp, setStartUp] = useState(true);

  useEffect(() => {
    if (startUp && value < end - 11111) {
      setTimeout(() => {
        setValue(value + 11111);
      }, 1);
    } else if (startUp && value > end - 11111 && value < end - 1111) {
      setTimeout(() => {
        setValue(value + 1111);
      }, 1);
    } else if (startUp && value > end - 1111 && value < end - 111) {
      setTimeout(() => {
        setValue(value + 111);
      }, 1);
    } else if (startUp && value > end - 111 && value < end) {
      setTimeout(() => {
        setValue(value + 1);
      }, 1);
    } else {
      setStartUp(false);
      setTimeout(() => {
        setValue(value + Math.sign(casesPerSecond));
      }, 1000 / Math.abs(casesPerSecond));
    }
  }, [value, setValue]);

  let digits = [];

  let sNumber = value.toString().split("");

  digits = sNumber.map((val) => {
    return (
      <div id={DigitContainer.digitContainer} key={Math.random().toString()}>
        {val}
      </div>
    );
  });

  return (
    <React.Fragment>
      <div id={CounterContainer.counterContainer} style={{ color: "white" }}>
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
