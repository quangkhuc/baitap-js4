function calculate() {
  //   var date = document.getElementById("date").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;
  var date = "" * 1;
  if (year % 4 == 0) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10
    ) {
      date = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      date = 30;
    } else {
      date = 29;
    }
  } else {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10
    ) {
      date = 31;
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      date = 30;
    } else {
      date = 28;
    }
  }
document.getElementById("datebefore").innerHTML = date;

}
