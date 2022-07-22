function dateafter() {
  var date = document.getElementById("date").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;

  if (year % 4 == !0) {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10
    ) {
      if (date < 31) {
        date = date + 1;
      } else {
        date = 1;
        month = month + 1;
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      if (date < 30) {
        date = date + 1;
      } else {
        date = 1;
        month = month + 1;
      }
    } else if (month === 12) {
      if (date < 31) {
        date = date + 1;
      } else {
        year = year + 1;
        month = 1;
        date = 1;
      }
    } else if (month === 2) {
      if (date < 28) {
        date = date + 1;
      } else {
        month = month + 1;
        date = 1;
      }
    }
  }
  else {
    if (
      month === 1 ||
      month === 3 ||
      month === 5 ||
      month === 7 ||
      month === 8 ||
      month === 10
    ) {
      if (date < 31) {
        date = date + 1;
      } else {
        date = 1;
        month = month + 1;
      }
    } else if (month === 4 || month === 6 || month === 9 || month === 11) {
      if (date < 30) {
        date = date + 1;
      } else {
        date = 1;
        month = month + 1;
      }
    } else if (month === 12) {
      if (date < 31) {
        date = date + 1;
      } else {
        year = year + 1;
        month = 1;
        date = 1;
      }
    } else if (month === 2) {
      if (date < 29) {
        date = date + 1;
      } else {
        month = month + 1;
        date = 1;
      }
    }
  }
    document.getElementById("dateafter").innerHTML =
      date + "/" + month + "/" + year;
}


function datebefore() {
  var date = document.getElementById("date").value * 1;
  var month = document.getElementById("month").value * 1;
  var year = document.getElementById("year").value * 1;

  if (year % 4 == !0) {
    if (
      month === 2 ||
      month === 4 ||
      month === 6 ||
      month === 7 ||
      month === 10 ||
      month === 11
    ) {
      if (date > 1) {
        date = date - 1;
      } else {
        date = 31;
        month = month -1;
      }
    } else if (month === 5 || month === 7 || month === 10 || month === 12) {
      if (date >1 ) {
        date = date - 1;
      } else {
        date = 30;
        month = month - 1;
      }
    } else if (month === 1) {
      if (date > 1) {
        date = date -1;
      } else {
        year = year - 1;
        month = 12;
        date = 31;
      }
    } else if (month === 3) {
      if (date >1) {
        date = date -1;
      } else {
        month = month -1;
        date = 28;
      }
    }
  }
  else {
    if (
      month === 2 ||
      month === 4 ||
      month === 6 ||
      month === 7 ||
      month === 10 ||
      month === 11
    ) {
      if (date > 1) {
        date = date - 1;
      } else {
        date = 31;
        month = month -1;
      }
    } else if (month === 5 || month === 7 || month === 10 || month === 12) {
      if (date >1 ) {
        date = date - 1;
      } else {
        date = 30;
        month = month - 1;
      }
    } else if (month === 1) {
      if (date > 1) {
        date = date -1;
      } else {
        year = year - 1;
        month = 12;
        date = 31;
      }
    } else if (month === 3) {
      if (date >1) {
        date = date -1;
      } else {
        month = month -1;
        date = 29;
      }
    }
  }
    document.getElementById("dateafter").innerHTML =
      date + "/" + month + "/" + year;
}
