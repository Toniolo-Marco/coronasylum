import moment from "moment";

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

export function apiDateToMonth(e) {
  return moment(e).format("MMM yyyy");
}
export function apiDateToString(e) {
  return moment(e).format("D MMM yyyy");
}
