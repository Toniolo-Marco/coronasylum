import axios from "axios";
import { stringtoDate } from "../index.import";

export default async function downloadData(query) {
  //console.log(query);
  return await axios
    .get(
      "http://localhost:5000/api/data?category=" +
        query.category +
        "&country=" +
        query.slug
    )
    .then((res) => {
      console.log(res.data);
      const arr = res.data;
    })
    .catch((err) => console.log(err))
    .finally();
}
