function doc() {
  let number = document.getElementById("number").value * 1;
  tram = Math.floor(number / 100) * 1;
  //   chuc = number % 10 - tram;
  chuc = Math.floor((number % 100) / 10);

  donVi = (number % 100) % 10;
  valueTram = "";
  valueChuc = "";
  valueDonVi = "";

  if (number < 99 || number > 999) return;
  if ((tram === 1)) {
    valueTram = "Mot Tram ";
  };
  if ((tram === 2)) {
    valueTram = "Hai Tram ";
  };
  if ((tram === 3)) {
    valueTram = "Ba Tram ";
  };
  if ((tram === 4)) {
    valueTram = "Bon Tram ";
  };
  if ((tram === 5)) {
    valueTram = "Nam Tram ";
  };
  if ((tram === 6)) {
    valueTram = "Sau Tram ";
  };
  if ((tram === 7)) {
    valueTram = "Bay Tram ";
  };
  if ((tram === 8)) {
    valueTram = "Tam Tram ";
  };
  if ((tram === 9)) {
    valueTram = "Chin Tram ";
  };
  if ((chuc === 1)) {
    valueChuc = "Muoi ";
  };
  if ((chuc === 2)) {
    valueChuc = "Hai Muoi ";
  };
  if ((chuc === 3)) {
    valueChuc = "Ba Muoi ";
  };
  if ((chuc === 4)) {
    valueChuc = "Bon Muoi ";
  };
  if ((chuc === 5)) {
    valueChuc = "Nam Muoi ";
  };
  if ((chuc === 6)) {
    valueChuc = "Sau Muoi ";
  };
  if ((chuc === 7)) {
    valueChuc = "Bay Muoi ";
  };
  if ((chuc === 8)) { 
    valueChuc = "Tam Muoi ";
  };
  if ((chuc === 9)) {
    valueChuc = "Chin Muoi ";
  };
  if ((donVi === 1)) {
    valueDonVi = "Mot";
  };
  if ((donVi === 2)) {
    valueDonVi = "Hai";
  };
  if ((donVi === 3)) {
    valueDonVi = "Ba";
  };
  if ((donVi === 4)) {
    valueDonVi = "Bon";
  };
  if ((donVi === 5)) {
    valueDonVi = "Nam";
  };
  if ((donVi === 6)) {
    valueDonVi = "Sau";
  };
  if ((donVi === 7)) {
    valueDonVi = "Bay";
  };
  if ((donVi === 8)) {
    valueDonVi = "Tam";
  };
  if ((donVi === 9)) {
    valueDonVi = "Chin";
  };

  document.getElementById("ketqua").innerHTML =
    valueTram + valueChuc + valueDonVi;
}
