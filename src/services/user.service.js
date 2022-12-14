import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const getUserData = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/users/${id}`);
};

export const getUser = () => {
    const token = localStorage.getItem('dist-user-token');
    return token ? jwtDecode(token) : null;
};

export const getUserById = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/users/${id}`);
};

export const getOrderByID = (id) => {
    return axios.get(`https://dist-back.herokuapp.com/order/${id}`);
};

export const updateUser = (id, user) => {
    return axios.put(`https://dist-back.herokuapp.com/users/${id}`, user);
};
