import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export async function downloadData(query, auth) {
  let headers = { clientIp: auth.session.ip, browser: auth.session.browser };

  if (auth && auth.user && auth.user.tokenId) {
    headers.Authorization = auth.user.tokenId;
    headers.Profile = JSON.stringify(auth.user);
  }
  console.log(auth);
  return instance.get(`/total/country/${query.slug}`, { headers });
}
