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

export const updateProduct = (id, product) => {
    return axios.put(`https://dist-back.herokuapp.com/product/${id}`, product);
};

export const getProductById = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/product/${id}`);
};

export const getOrdersLast24Hours = () => {
    return axios.get('https://dist-back.herokuapp.com/order/est/last24hours');
};

export const getProductsMoreSold = () => {
    return axios.get('https://dist-back.herokuapp.com/order/est/products/moreSold');
};
