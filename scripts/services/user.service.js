const server = 'http://localhost:3000';

const listUsers = () => fetch(server+'/user').then((respuesta) => respuesta.json());

export const userServices = {
    listUsers
};
  