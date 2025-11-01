let date = new Date();

let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;

document.getElementById("date").innerText = currentDate;

let classes = [
  "Pre-Nursary",
  "Nursary",
  "KG",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
];
