import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getUserData } from '../services/user.service';
import axios from 'axios';

const C = React.createContext({
    user: null,
});

export function useAppContext() {
    return useContext(C);
}

export function AppContext({ children }) {
    const [state, setState] = useState({
        user: null,
        cart: [],
        loaded: false,
    });

    useEffect(() => {
        const token = localStorage.getItem('dist-user-token');
        if (token) {
            getUserFromToken(token);
        } else
            setState((state) => ({
                ...state,
                loaded: true,
            }));

        const cart = JSON.parse(localStorage.getItem('dist-cart'));
        if (cart) {
            setState((state) => ({
                ...state,
                cart,
            }));
        }
    }, []);

    function getUserFromToken(token) {
        const userData = jwt_decode(token);
        getUserData(userData._id).then((response) => {
            setState((state) => ({
                ...state,
                user: response.data,
                loaded: true,
            }));
        });
    }

    const login = (user, callback) => {
        axios
            .post('https://dist-back.herokuapp.com/users/authentication', user)
            .then((response) => {
                localStorage.setItem('dist-user-token', response.data.token);
                getUserFromToken(response.data.token);
                NotificationManager.success('Login realizado com sucesso', 'Sucesso', 3000);
                callback();
            })
            .catch((error) => {
                NotificationManager.error('Erro ao realizar login', 'Erro', 3000);
            });
    };

    const logout = (callback) => {
        localStorage.removeItem('dist-user-token');
        setState((state) => ({
            ...state,
            user: null,
        }));
        callback();
    };

    const addToCart = (product) => {
        const itemOnCart = state.cart.find((item) => item._id === product._id);
        if (itemOnCart) {
            if (product.stock > itemOnCart.quantity) {
                setState((state) => ({
                    ...state,
                    cart: state.cart.map((item) => {
                        if (item._id === product._id) {
                            return {
                                ...item,
                                quantity: item.quantity + 1,
                            };
                        }
                        return item;
                    }),
                }));
                localStorage.setItem('dist-cart', JSON.stringify(state.cart));
            } else {
                NotificationManager.error('Produto fora de estoque', 'Erro!', 5000);
            }
        } else {
            if (product.stock > 0) {
                setState((state) => ({
                    ...state,
                    cart: [...state.cart, { ...product, quantity: 1 }],
                }));
                localStorage.setItem('dist-cart', JSON.stringify(state.cart));
            } else {
                NotificationManager.error('Produto fora de estoque', 'Erro!', 5000);
            }
        }
    };

    const removeFromCart = (product) => {
        const newCart = state.cart.filter((item) => item._id !== product._id);
        setState((state) => ({
            ...state,
            cart: newCart,
        }));
        localStorage.setItem('dist-cart', JSON.stringify(newCart));
    };

    const clearCart = () => {
        setState((state) => ({
            ...state,
            cart: [],
        }));
        localStorage.setItem('dist-cart', JSON.stringify([]));
    };

    const incrementProduct = (product) => {
        const newCart = state.cart.map((item) => {
            if (item._id === product._id) {
                if (item.quantity < product.stock) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    NotificationManager.error('Produto fora de estoque', 'Erro!', 5000);
                }
            }
            return item;
        });
        setState((state) => ({
            ...state,
            cart: newCart,
        }));
        localStorage.setItem('dist-cart', JSON.stringify(newCart));
    };

    const decrementProduct = (product) => {
        const newCart = state.cart.map((item) => {
            if (item._id === product._id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setState((state) => ({
            ...state,
            cart: newCart,
        }));
        localStorage.setItem('dist-cart', JSON.stringify(newCart));
    };

    return (
        <C.Provider
            value={{
                ...state,
                setState,
                addToCart,
                removeFromCart,
                clearCart,
                incrementProduct,
                decrementProduct,
                login,
                logout,
            }}
        >
            <NotificationContainer />
            {children}
        </C.Provider>
    );
}
