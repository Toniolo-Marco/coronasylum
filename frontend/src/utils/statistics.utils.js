import axios from "axios";

export const user = {};

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function downloadData(query, auth) {
  let headers = {};
  if (auth && auth.user && auth.user.tokenId) {
    headers.Authorization = auth.user.tokenId;
  }
  console.log(headers);
  return instance.get(`/total/country/${query.slug}`, { headers });
}
