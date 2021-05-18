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

export function datetoShortDate(element) {
  //var d = element.getDate();
  var m = monthtoString(element.getMonth());
  //console.log(element.getMonth());
  //console.log(m);

  var y = element.getFullYear();
  return m + " " + y;
}

export function monthtoString(d) {
  //console.log(d);
  var month = new Array();
  month[0] = "December";
  month[1] = "January";
  month[2] = "February";
  month[3] = "March";
  month[4] = "April";
  month[5] = "May";
  month[6] = "June";
  month[7] = "July";
  month[8] = "August";
  month[9] = "September";
  month[10] = "October";
  month[11] = "November";
  return month[d];
}

export function dateToMonth(date){
  let arr=[];
  date.forEach(e => {
    arr.push(datetoShortDate(e));
  });
  return arr;
}