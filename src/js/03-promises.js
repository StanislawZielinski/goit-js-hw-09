const form = document.querySelector(".form");
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';
// const delay = document.querySelector('[name="delay"]');



form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  let {
    elements: { delay, step, amount }
  } = event.currentTarget;
  delay = Number(delay.value);
  step = Number(step.value);

  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldResolve) {
          resolve({position, delay});
          } else {
          reject({position, delay});
        }
      }, delay);
    });
  };

    for (let i = 1; i <= amount.value; i++) {
      createPromise(i, delay)
        .then(({position, delay}) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({position, delay}) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
      delay = delay +step;
    };
}



