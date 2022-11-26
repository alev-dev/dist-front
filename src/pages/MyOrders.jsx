import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getordersByUser } from '../services/order.service';

export default function MyOrders() {
    const { user } = useAppContext();
    const [orders, setorders] = useState([]);

    useEffect(() => {
        if (user) {
            getordersByUser(user._id).then((response) => {
                setorders(response.data);
            });
        }
    }, [user]);

    return (
        <div className="order-container">
            <h1>Meus pedidos</h1>
            <div className="orders-list">
                {orders.map((order) => (
                    <Link to={`/order/${order._id}`} className="order" key={order._id}>
                        <div className="order-header">
                            <h3>Pedido # {order._id}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
