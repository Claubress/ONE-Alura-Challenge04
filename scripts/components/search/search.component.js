import { productService } from "../../services/product.service.js";
import { renderClient } from "../card/renderclient.component.js"
import { renderAdmin } from "../card/renderadmin.component.js";

export function loadSearch() {
    const mySearch = document.querySelector('.head__search__bar');
    mySearch.addEventListener('submit', handleSubmit);
}


function handleSubmit(event) {
    event.preventDefault();
    const inputSearch = document.querySelector('[data-search]');
    const textSearch = inputSearch.value.toLowerCase();

    const where = (event.srcElement.action).indexOf('index.html') > 0 ?'index' :'admin';
    let resultSearch = [];
    
    productService
      .listProduct()
      .then (products => {
        
        resultSearch = products.filter(product => (product.name.toLowerCase()).indexOf(textSearch) >= 0);
        
        if(where === 'index') {
            renderClient(resultSearch);
        } else {
            renderAdmin(resultSearch);    
        }
    })
    .catch(() => alert('Ocurrio un error'));
}
