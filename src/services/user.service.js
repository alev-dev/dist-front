import axios from 'axios';

export const getUserData = (id) => {
    return axios.get(`http://localhost:3000/users/${id}`);
};

export const getOrderByID = (id) => {
    return axios.get(`http://localhost:3000/order/${id}`);
};
