export const createNewCard = (id, name, price, image, cod, admin) => {
    const card = document.createElement('div');
    card.classList.add('component__card');
    let contenido = '';
    if(admin) {
        contenido = `
        <div class="component__card__tools">
            <img class="component__card__img" src=${image}>
            <div class="component__card__buttons">
                <button class="component__card__button" type="button">
                    <img src="../assets/generals/delete.png" alt="Borrar">
                </button>
                <button class="component__card__button" type="button">
                    <img src="../assets/generals/edit.png" alt="Borrar">
                </button>
            </div>
        </div>
        <p class="component__card__name">${name}</p>
        <p class="component__card__price">R$ ${price}</p>
        <p class="component__card__cod">#${cod}</p>
        `;
    
    } else {
        contenido = `
            <img class="component__card__img" src=${image}>
            <p class="component__card__name">${name}</p>
            <p class="component__card__price">R$ ${price}</p>
            <a class="component__card__link" href="screens/product.html?id=${id}">Ver producto</a>
        `;
    }

    card.innerHTML = contenido;
    return card;
}

