import axios from 'axios';

export const createOrder = (order) => {
    return axios.post('https://dist-back.herokuapp.com/order', order);
};

export const getordersByUser = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/order/user/${id}`);
};
