import throttle from "lodash.throttle";

const inputForm = document.querySelector(`.feedback-form`);
const formData = {};
const STORAGE_KEY = "feedback-form-state";

messageRec();

inputForm.addEventListener(`input`, throttle(onInputChange, 500));
inputForm.addEventListener(`submit`, onFormSubmit);

function onInputChange(e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    console.log(formData)
};

function messageRec() {
    
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY))
        if (saved) {
        inputForm.elements.email.value = saved.email;
        inputForm.elements.message.value = saved.message;
    
    }
};

function onFormSubmit(e) {
    e.preventDefault();
    localStorage.removeItem(STORAGE_KEY);
    e.target.reset();

};