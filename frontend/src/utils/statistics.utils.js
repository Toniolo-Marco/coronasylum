import axios from "axios";

export const user = {};

const instance = axios.create({
  baseURL: "http://localhost:5000/api",
});

export function downloadData(query) {
  return instance.get(`/total/country/${query.slug}`);
}

const getAuth = () => {
  if (sessionStorage.getItem("user")) {
    const session = JSON.parse(sessionStorage.getItem("user"));
    instance
      .post(`/auth`, session, {
        headers: { "content-type": "application/json" },
      })
      .then((payload) => {
        user.payload = payload;
      })
      .catch((err) => {
        console.log(err);
      });

    return { accessToken: session.accessToken };
  }
  return {};
};
