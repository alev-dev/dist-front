import React, { useContext, useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getUserData } from '../services/user.service';

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
    });

    useEffect(() => {
        const token = localStorage.getItem('dist-user-token');
        if (token) {
            const userData = jwt_decode(token);
            getUserData(userData._id).then((response) => {
                setState((state) => ({
                    ...state,
                    user: response.data,
                }));
            });
        }

        const cart = JSON.parse(localStorage.getItem('dist-cart'));
        if (cart) {
            setState((state) => ({
                ...state,
                cart,
            }));
        }
    }, []);

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
                return { ...item, quantity: item.quantity + 1 };
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
            value={{ ...state, setState, addToCart, removeFromCart, clearCart, incrementProduct, decrementProduct }}
        >
            <NotificationContainer />
            {children}
        </C.Provider>
    );
}
