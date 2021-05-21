import axios from "axios";
import { stringtoDate } from "../index.import";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export default function downloadData(query) {
  return instance.get(`/total/country/${query.slug}`, { headers: getAuth() });
}

const getAuth = () => {
  if (sessionStorage.getItem("user")) {
    const session = JSON.parse(sessionStorage.getItem("user"));
    console.log(session);
    return { accessToken: session.accessToken };
  }
  return {};
};
