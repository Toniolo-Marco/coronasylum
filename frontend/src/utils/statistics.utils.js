import axios from "axios";

export const user = {};

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function downloadData(query) {
  return instance.get(`/total/country/${query.slug}`);
}
