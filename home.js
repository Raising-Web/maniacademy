let date = new Date();

let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = `${day}/${month}/${year}`;

document.getElementById("date").innerText = currentDate;

//

let course = [
  "Pre-Nursary",
  "Nursery",
  "KG",
  "Class 1",
  "Class 2",
  "class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
];

course.forEach((value) => {
  document.getElementById(
    "courses"
  ).innerHTML += `<div class="border-0 rounded-xl px-5 py-2 font-semibold bg-blue-500">
      ${value}
    </div>`;
});

//

let testimonial = [
  {
    name: "student 1",
    img: "https://randomuser.me/api/portraits",
    postion: "top rank in rims",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ut labore et dolore magna aliqua.",
  },
];
