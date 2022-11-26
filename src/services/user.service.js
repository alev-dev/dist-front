import axios from 'axios';

export const getUserData = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/users/${id}`);
};

export const getOrderByID = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/order/${id}`);
};
