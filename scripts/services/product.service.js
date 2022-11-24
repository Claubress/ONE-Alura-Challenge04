const server = 'http://localhost:3000';

const listProduct = () => fetch(server+'/product').then((respuesta) => respuesta.json());

const crearProduct = (category, name, price, description, cod, image) => {
    return fetch(server+'/product', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({id: uuid.v4(), category, name, price, description, cod, image}) 
    })
  }
  

export const productService = {
    listProduct,
    crearProduct
};