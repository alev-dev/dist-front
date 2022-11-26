import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { getOrders } from '../../services/order.service';

export default function OrderList() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders().then((response) => {
            setOrders(response.data);
        });
    }, []);

    return (
        <div className="order-details-container">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Valor</th>
                        <th>Forma de Pag</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{order.user.name}</td>
                            <td>{`${order.total} BRL`}</td>
                            <td>{order.paymentForm}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
