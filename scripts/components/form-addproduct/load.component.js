import { handleSubmit } from "./submit.component.js";
import { handleValid } from "./validation.component.js";

export function loadFormAddproduct() {

    const fileInput = document.getElementById('inputImage')
    fileInput.addEventListener('blur', (input) => {
            handleValid(input.target);
    });

    
    const inputs = document.querySelectorAll('.component__input');
    inputs.forEach((input) => {
        input.addEventListener('blur', (input) => {
            handleValid(input.target);
        });
    });
    

    const myForm = document.querySelector('#formAddProduct');
    myForm.addEventListener('submit', handleSubmit);
}
