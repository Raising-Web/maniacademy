let date = new Date();

let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`

document.getElementById('date').innerText = currentDate;