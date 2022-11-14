import { handleSubmit } from "./submit.component.js";
import { handleValid } from "./validation.component.js";

export function loadFormSpeakUs() {

    const inputs = document.querySelectorAll('.component__input');
    inputs.forEach((input) => {
        input.addEventListener('blur', (input) => {
            handleValid(input.target);
        });
    });
    
    const textareas = document.querySelectorAll('.component__textarea');
    textareas.forEach((textarea) => {
        textarea.addEventListener('blur', (textarea) => {
            handleValid(textarea.target);
        });
    });
    
    const myForm = document.querySelector('#formSpeakUs');
    myForm.addEventListener('submit', handleSubmit);
} 
