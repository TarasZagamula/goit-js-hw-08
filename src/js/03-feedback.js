import throttle from "lodash.throttle";

const inputForm = document.querySelector(`.feedback-form`);
const STORAGE_KEY = "feedback-form-state";
const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
const formData = {
    email: "",
    message: "",
};

if (saved !== null) {
 messageParse();
};


inputForm.addEventListener(`input`, throttle(onInputChange, 500));
inputForm.addEventListener(`submit`, onFormSubmit);

function onInputChange(e) {
    const formValue = e.target.value;
    
    if (e.target.name === `email`) {
        formData.email = formValue; 
        formData.message = saved ? saved.message : "";
    } else {
        formData.message = formValue;
        formData.email = saved ? saved.email : "";
    }
    messageRec(formData);
};

function messageRec(el) {
    return localStorage.setItem(STORAGE_KEY, JSON.stringify(el));
};

function messageParse() {
        if (saved) {
        inputForm.elements.email.value = saved.email;
        inputForm.elements.message.value = saved.message;
    }
};

function onFormSubmit(e) {
    e.preventDefault();
    if (inputForm.elements.email.value || inputForm.elements.message.value !== "") {
    localStorage.removeItem(STORAGE_KEY)
    e.target.reset();
    return
    } 
        
    alert(`Заполните все поля!`);
    console.log(`test`)
};