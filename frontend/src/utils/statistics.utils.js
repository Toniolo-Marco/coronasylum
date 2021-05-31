import axios from "axios";
import { Authentication } from "../Authentication";
import { useContext } from "react";

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export async function downloadData(query, auth) {
  let headers = { clientIp: auth.session.ip, browser: auth.session.browser };

  if (auth && auth.user && auth.user.tokenId) {
    headers.Authorization = auth.user.tokenId;
  }

  return instance.get(`/total/country/${query.slug}`, { headers });
}
