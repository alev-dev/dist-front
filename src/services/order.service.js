import axios from 'axios';

export const createOrder = (order) => {
    return axios.post('http://localhost:3000/order', order);
};

export const getordersByUser = (id) => {
    return axios.get(`http://localhost:3000/order/user/${id}`);
};
