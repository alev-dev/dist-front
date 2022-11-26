import axios from 'axios';

export const createOrder = (order) => {
    return axios.post('https://dist-back.herokuapp.com/order', order);
};

export const getordersByUser = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/order/user/${id}`);
};

export const getOrders = () => {
    return axios.get('https://dist-back.herokuapp.com/order');
};

export const createProduct = (product) => {
    return axios.post('https://dist-back.herokuapp.com/product', product);
};

export const deleteProduct = (id) => {
    return axios.delete(`https://dist-back.herokuapp.com/product/${id}`);
};
