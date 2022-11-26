import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';
import { useAppContext } from '../context/AppContext';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getUserData } from '../services/user.service';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { cart, incrementProduct, decrementProduct, removeFromCart, clearCart } = useAppContext();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <>
            <div className="dist-cart">
                <h1>Carrinho</h1>
                {cart.length === 0 && (
                    <div className="cart-empty">
                        <h2>Carrinho vazio</h2>
                    </div>
                )}
                <ListGroup as="ol" className="cart-list" numbered>
                    {cart.map((product) => (
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                            key={product._id}
                        >
                            <div className="ms-2 me-auto">
                                <img
                                    src={product.image}
                                    alt=""
                                    width={150}
                                    height={150}
                                    style={{ objectFit: 'contain' }}
                                />
                            </div>
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">{product.name}</div>
                                <div>{product.description}</div>
                                <div>{`Preço : ${product.price} BRL`}</div>
                            </div>
                            <div className="ms-2 me-auto">
                                <span>Quantidade:</span>
                                <div className="cart-qty-input">
                                    <div className="less" onClick={() => decrementProduct(product)}>
                                        <FontAwesomeIcon icon={faAngleLeft} />
                                    </div>
                                    <Badge bg="primary">{product.quantity}</Badge>
                                    <div className="more" onClick={() => incrementProduct(product)}>
                                        <FontAwesomeIcon icon={faAngleRight} />
                                    </div>
                                </div>
                            </div>
                            <div className="cart-actions">
                                <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                                    Remover
                                </button>
                            </div>
                        </ListGroup.Item>
                    ))}
                </ListGroup>

                {cart.length > 0 && (
                    <>
                        <div className="details">
                            <div className="cart-total">
                                <span>Total:</span>
                                <span>{total} BRL</span>
                            </div>
                        </div>
                        <div className="cart-actions">
                            <button className="btn btn-danger m-2" onClick={() => clearCart()}>
                                Limpar Carrinho
                            </button>
                            <Link to="/checkout" className="btn btn-primary m-2">
                                Finalizar compra
                            </Link>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
