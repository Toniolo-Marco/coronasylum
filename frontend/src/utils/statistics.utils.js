import axios from "axios";
import { stringtoDate } from "../index.import";

export default function downloadData(query) {
  return axios.get(`http://localhost:5000/api/total/country/${query.slug}`);
}
