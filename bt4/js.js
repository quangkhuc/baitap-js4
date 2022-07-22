function In() {
  let toadoA = document.getElementById("toadoA").value * 1;
  let toadoB = document.getElementById("toadoB").value * 1;
  let toadoC = document.getElementById("toadoC").value * 1;
  nguoixanhat = "";
  if (toadoA > toadoB && toadoA > toadoC) {
    nguoixanhat = document.getElementById("SVA");
  }
  if (toadoB > toadoC && toadoB > toadoA) {
    nguoixanhat = document.getElementById("SVB");
  }
  if (toadoC > toadoB && toadoC > toadoA) {
    nguoixanhat = document.getElementById("SVC");
  }
  document.getElementById("ketqua").innerHTML = nguoixanhat;
}
