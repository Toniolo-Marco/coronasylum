import axios from "axios";
import { stringtoDate } from "../index.import";

export default async function downloadData(query) {
  console.log(query);
  return await axios
    .get(
      "http://localhost:5000/api/data?category=" +
        query.category +
        "&country=" +
        query.slug
    )
    .then((res) => {
      //console.log(res.data);
      let arr = {};
      res.data !== undefined ? (arr.data = res.data) : (arr.data = []);
      if (res.data == []) {
        console.log("Errore del backend");
        //downloadData(query);
      }
      return arr.data;
    })
    .catch((err) => {
      console.log("errore frontend");
      console.log(err);
      //return downloadData(query);
    })
    .finally();
}
