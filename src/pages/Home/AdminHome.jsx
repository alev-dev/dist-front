import React, { useState } from 'react';
import { getOrdersLast24Hours, getProductsMoreSold } from '../../services/order.service';
import { paymentDic } from '../../utils/paymentDic';

export default function AdminHome() {
    const [ordersLastDay, setordersLastDay] = useState([]);
    const [productMoreSold, setproductMoreSold] = useState([]);

    useState(() => {
        getProductsMoreSold().then((response) => {
            setproductMoreSold(response.data);
        });
        getOrdersLast24Hours().then((response) => {
            setordersLastDay(response.data);
        });
    }, []);

    console.log(paymentDic['card']);

    return (
        <div className="home-cotainer">
            <header>
                <div className="header-image">
                    <img
                        src="https://casaeconstrucao.org/wp-content/uploads/2021/06/1-fornecedor-de-bebidas-alcoolicas-e-nao-alcoolicas.png"
                        alt="header"
                    />
                </div>
                <div className="header-text">
                    <h1>Estadisticas</h1>
                </div>
            </header>
            <div className="statistics-container">
                <div className="statistics-section">
                    <h2>Produtos mais vendidos</h2>
                    <div className="statistics-section-content">
                        {productMoreSold.map((product) => (
                            <div className="statistics-section-content-item" key={product.name}>
                                <h5>{product.name}</h5>
                                <img src={product.image} alt="" width={100} height={100} />
                                <span>Total : {product.total}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="statistics-section">
                    <h2>Pedidos nas ultimos 24 horas</h2>
                    <div className="statistics-section-content">
                        {ordersLastDay.map((order) => (
                            <div className="statistics-section-content-item" key={order._id}>
                                <h5>{order._id}</h5>
                                <div className="images">
                                    {order.products.map(({ product, quantity }) => (
                                        <div className="details" key={product._id}>
                                            <img src={product.image} alt="" width={40} height={40} />
                                            <span>{quantity}</span>
                                        </div>
                                    ))}
                                    <div className="payment">
                                        <img src={paymentDic[order.paymentForm].image} alt="" width={40} height={40} />
                                    </div>
                                </div>
                                <span>Total : {order.total}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
