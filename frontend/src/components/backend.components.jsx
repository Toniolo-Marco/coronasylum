import axios from "axios";
import { useEffect } from "react";

function call() {
  axios.get("http://localhost:5000/api/data").then((res) => {
    console.log(res);
  });
}

export default function CallBackend() {
  useEffect(() => {
    call();
  }, []);
  return <div></div>;
}
