export function inttoString(n) {
  var str = n.toString();
  var s = "";
  if (str.length < 4) {
    return str;
  }
  for (let i = 0; i < str.length; i++) {
    if (i % 3 === 0 && i !== 0) {
      s += "," + str.charAt(str.length - i - 1);
    } else {
      s += str.charAt(str.length - i - 1);
    }
  }
  return s.split("").reverse().join("");
}
import moment from "moment";

export function apiDateToMonth(data) {
  let arr = [];
  data.forEach((e) => {
    arr.push(moment(e.Date).format("MMM, yyyy"));
    //accedo alla data di ogni singolo elemento
    //creo un oggetto di tipo Date
    //
  });
  return arr;
}
