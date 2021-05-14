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

export function stringtoDate(str) {
  var y = str.substring(0, 4);
  var m = str.substring(5, 7);
  var d = str.substring(8, 10);

  return new Date(y, m, d);
}

export function datetoShortDate(date) {
  var d = date.getDate();
  var m = monthtoString(date.getMonth());
  //console.log(date.getMonth());
  //console.log(m);

  var y = date.getFullYear();
  return d + " " + m + " " + y;
}

export function monthtoString(d) {
  //console.log(d);
  var month = new Array();
  month[0] = "Dicembre";
  month[1] = "Gennaio";
  month[2] = "Febbraio";
  month[3] = "Marzo";
  month[4] = "Aprile";
  month[5] = "Maggio";
  month[6] = "Giugno";
  month[7] = "Luglio";
  month[8] = "Agosto";
  month[9] = "Settembre";
  month[10] = "Ottobre";
  month[11] = "Novembre";
  return month[d];
}

