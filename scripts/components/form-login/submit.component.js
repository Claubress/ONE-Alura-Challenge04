import { userServices } from "../../services/user.service.js";

export function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this);

    const email = document.querySelector('[data-email]').value;
    const password = document.querySelector('[data-password]').value;

    let valid = false;

    userServices
        .listUsers()
        .then((data) => {
            data.forEach((user) => {
                if(email === user.email && password === user.password) {
                    valid = true;
                }
            }); 
            
            if(valid) {
                this.reset();
                window.location.href =  '/screens/administrator.html'
            } else {
                alert('Combinación email-password inválida')
            }
        })
        .catch((error) => alert('Ocurrio un error, intente más tarde.'));    

}
