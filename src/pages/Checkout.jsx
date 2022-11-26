import React from 'react';
import { createOrder } from '../services/order.service';
import CardImage from '../../src/assets/card.png';
import MoneyImage from '../../src/assets/money.png';
import PixImage from '../../src/assets/pix.png';
import { useAppContext } from '../context/AppContext';
import { NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const { user, cart, clearCart } = useAppContext();
    const navigate = useNavigate();

    const createOrderFunc = (paymentForm) => {
        const order = {
            user: user._id,
            products: cart.map((item) => ({
                product: item._id,
                quantity: item.quantity,
            })),
            paymentForm,
            total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
        };
        createOrder(order).then((response) => {
            clearCart();
            navigate('/orders');
            NotificationManager.success('Pedido realizado com sucesso', 'Sucesso!', 5000);
        });
    };

    return (
        <div className="payment-container">
            <div className="payment-header">
                <h1>Selecionar forma de pagamento</h1>
            </div>
            <div className="payments-list">
                <div className="payment" onClick={() => createOrderFunc('card')}>
                    <div className="payment-title">
                        <h3>Cartão de crédito</h3>
                    </div>
                    <div className="payment-body">
                        <div className="icon">
                            <img src={CardImage} alt="visa" />
                        </div>
                    </div>
                </div>
                <div className="payment" onClick={() => createOrderFunc('pix')}>
                    <div className="payment-title">
                        <h3>Pix</h3>
                    </div>
                    <div className="payment-body">
                        <div className="icon">
                            <img src={PixImage} alt="pix" />
                        </div>
                    </div>
                </div>
                <div className="payment" onClick={() => createOrderFunc('dinheiro')}>
                    <div className="payment-title">
                        <h3>Dinheiro</h3>
                    </div>
                    <div className="payment-body">
                        <div className="icon">
                            <img src={MoneyImage} alt="dinheiro" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
