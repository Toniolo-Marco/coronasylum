import axios from "axios";
import { stringtoDate} from "../index.import";

export default async function downloadData(query) {
  var ret = undefined;
  const xs = [];
  const ys = [];
  console.log(query);
  //http://localhost:5000/api/data?country=world
  //https://api.covid19api.com/dayone/country/italy/status/confirmed
  /*Prende solo da paesi!!!*/
  await axios
    .get("http://localhost:5000/api/data?country=" + query.country + "&" + query.casetype)
    .then((res) => {
      console.log(res.data);
      const arr = res.data;
      //const map = new Map();

      /*
        arr.forEach(e =>{
            map.set(stringtoShortDate(e.Date),e.Cases);
        });
        */

      //setting axes for chart
      arr.forEach((e) => {
        //console.log(e.Date);
        xs.push(stringtoDate(e.Date));
      });
      /*
      arr.forEach((e) => {
        ys.push(e.);
      });*/
      //controllo che dato inserire sull'asse delle ordinate

      if (
        arr[0].Confirmed !== undefined &&
        arr[0].Cases === undefined &&
        arr[0].TotalConfirmed === undefined
      ) {
        arr.forEach((e) => {
          ys.push(e.Confirmed);
        });
      }
      if (
        arr[0].Cases !== undefined &&
        arr[0].Confirmed === undefined &&
        arr[0].TotalConfirmed === undefined
      ) {
        arr.forEach((e) => {
          ys.push(e.Cases);
        });
      }
      if (
        arr[0].TotalConfirmed !== undefined &&
        arr[0].Cases === undefined &&
        arr[0].Confirmed === undefined
      ) {
        arr.forEach((e) => {
          ys.push(e.TotalConfirmed);
        });
      }

      ret = { xs, ys };
    })
    .finally();
  return ret;
}
