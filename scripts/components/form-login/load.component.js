import { handleSubmit } from "./submit.component.js";
import { handleValid } from "./validation.component.js";

export function loadFormLogin() {

    const inputs = document.querySelectorAll('.loginform__input');
    inputs.forEach((input) => {
        input.addEventListener('blur', (input) => {
            handleValid(input.target);
        });
    });
        
    const myForm = document.querySelector('#formLogin');
    myForm.addEventListener('submit', handleSubmit);
} 