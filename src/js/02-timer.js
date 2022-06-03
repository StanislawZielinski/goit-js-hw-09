import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const timer = document.body.querySelector(".timer");
const field = document.body.querySelectorAll(".field");
const value = document.body.querySelectorAll(".value");
const label = document.body.querySelectorAll(".label");
const myInput = document.querySelector("#datetime-picker");

timer.style.display = "flex";
timer.style.gap = "30px";
timer.style.fontSize = "36px";
field.forEach(function (elem) {
    elem.style.display = "flex";
    elem.style.flexDirection = "column";
    elem.style.alignItems = "center";
});
label.forEach(function (elem) {
    elem.style.textTransform = "uppercase";
    elem.style.fontSize = "20px";
});


const fp = flatpickr(myInput, {});  // flatpickr
// field.style.display = "flex";
// field.style.flexDirection = "column";
// field.style.backgroundColor = "red";