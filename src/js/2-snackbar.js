// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector('.delay');
const promiseInput = document.querySelector('.promise-state');
const createBtn = document.querySelector('.notif-btn');

let isSuccess;
let delay;

delayInput.addEventListener('input', (evt) => {
    delay = evt.currentTarget.value;
})

promiseInput.addEventListener('change', (event) => {
    if (event.target.value === 'fulfilled') {
        isSuccess = true;
    } else if(event.target.value === 'rejected') {isSuccess = false;}
})

createBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(isSuccess) {
                resolve();
            } else {
                reject();
            }
        }, delay)
    })
    promise
        .then(() => iziToast.success({
                    message: `✅ Fulfilled promise in ${delay}ms`,
                    closeOnClick: true,
                    position: "topRight",
                }))
        .catch(() => iziToast.error({
                    message: `❌ Rejected promise in ${delay}ms`,
                    closeOnClick: true,
                    position: "topRight",
                }));
})

