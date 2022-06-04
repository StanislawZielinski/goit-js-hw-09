import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
const timer = document.body.querySelector(".timer");
const field = document.body.querySelectorAll(".field");
const startBtn = document.body.querySelector("[data-start]");
const label = document.body.querySelectorAll(".label");
const myInput = document.querySelector("#datetime-picker");
const daysCounter = document.querySelector("[data-days]");
const hoursCounter = document.body.querySelector("[data-hours]");
const minutesCounter = document.querySelector("[data-minutes]");
const secondsCounter = document.querySelector("[data-seconds]");

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

startBtn.disabled = true;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0].getTime() < options.defaultDate.getTime()) {
          Notiflix.Notify.failure("Please choose a date in the future");
          startBtn.disabled = true;
          return
      }
      else {
            startBtn.disabled = false;
            const startDate = selectedDates[0].getTime();
            const ms = startDate - options.defaultDate.getTime();
            let sec = ms/1000;
          


            let days = convertMs(ms).days;
            let hours = convertMs(ms).hours;
            let minutes = convertMs(ms).minutes;
            let seconds = convertMs(ms).seconds;
            console.log(days)

            daysCounter.textContent = days;
            hoursCounter.textContent = hours;
            minutesCounter.textContent = minutes;
            secondsCounter.textContent = seconds;
            let remainingTime = {days,hours,minutes,seconds}
            console.log(remainingTime);    
            startBtn.addEventListener("click", startCounting);
            function startCounting() {
                    for (let i = 0; i <= sec; i++) {
                        function count() {
                            sec = sec - 1;
                            console.log(sec);
                            setInterval(count, 1000);
                        };
                        count();
                    }               
            };
        }
  },
};
const fp = flatpickr(myInput,options);  // flatpickr



function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    // console.log(seconds, minutes, hours, days);
    return { days, hours, minutes, seconds };
};

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

        //   addLeadingZero({ days, hours, minutes, seconds });
        //   function addLeadingZero(value) {
        //         console.log(value);
        //         const values = Object.values(value);
        //         console.log(values);
        //         for (let i of values) {
        //             if (i<10) {
        //                 i = i.toString().padStart(2, "0");
        //                 values.push[i];
        //             }
        //       };
        //       console.log(values);
        //       return value;
        //     // if (value.days<10) {
        //     //     value.days = value.days.toString().padStart(2,"0");
        //     //     console.log(value.days);
        //     // }
        //   }