import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';
import { deleteProduct } from '../../services/order.service';
export default function ProductManager() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        // Fetch data from API
        axios.get('https://dist-back.herokuapp.com/product').then((response) => {
            setproducts(response.data);
        });
    }, []);

    const onDeleteProduct = (id) => {
        deleteProduct(id)
            .then((response) => {
                NotificationManager.success('Produto deletado com sucesso', 'Sucesso', 3000);
                setproducts(products.filter((product) => product._id !== id));
            })
            .catch((error) => {
                NotificationManager.error('Erro ao deletar produto', 'Erro', 3000);
            });
    };

    return (
        <div className="home-cotainer">
            <header>
                <h2>Administrador de produtos</h2>
                <Link to="/admin/product/create">
                    <button className="my-4 btn btn-primary">Adicionar produto</button>
                </Link>
            </header>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th></th>
                        <th>Nome</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>
                                <img src={product.image} alt={product.name} width={80} height={80} />
                            </td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>
                            <td>
                                <button className="btn btn-danger mx-2" onClick={() => onDeleteProduct(product._id)}>
                                    Remover
                                </button>
                                <button className="btn btn-danger mx-2">Atualizar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
