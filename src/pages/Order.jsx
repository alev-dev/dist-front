import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderByID } from '../services/user.service';

export default function Order() {
    const { idOrder } = useParams();

    const [order, setOrder] = useState(null);
    useEffect(() => {
        if (idOrder) {
            getOrderByID(idOrder).then((response) => {
                setOrder(response.data);
            });
        }
    }, [idOrder]);

    console.log(order);
    if (order)
        return (
            <div className="order-details-container">
                <h1>Pedido # {order._id}</h1>
                <div className="order-details">
                    <div className="order-details-header">
                        <h3>Detalhes do pedido</h3>
                    </div>
                    <div className="order-details-body">
                        <div className="order-details-body-item">
                            <h4>Forma de pagamento</h4>
                            <p>{order.paymentForm}</p>
                        </div>
                        <div className="order-details-body-item">
                            <h4>Valor total</h4>
                            <p>R$ {order.total}</p>
                        </div>

                        <div className="order-details-body-item">
                            <h4>Produtos</h4>
                            <div className="order-products">
                                {order.products.map(({ product }) => (
                                    <div className="order-product" key={product._id}>
                                        <div className="order-product-image">
                                            <img src={product.image} alt={product.name} />
                                        </div>
                                        <div className="order-product-info">
                                            <p>{product.name}</p>
                                            <p>R$ {product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}
