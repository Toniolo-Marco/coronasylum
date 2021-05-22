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
  
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
}

export default function numbercounter(){

    const obj = document.getElementById("value");

    animateValue(obj, 100, 0, 5000);
}