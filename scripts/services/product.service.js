const server = 'http://localhost:3000';

const listProduct = () => fetch(server+'/product').then((respuesta) => respuesta.json());

export const productService = {
    listProduct
};