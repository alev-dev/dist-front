import axios from 'axios';
import React, { useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../services/order.service';

export default function ProductForm() {
    const [product, setproduct] = useState({
        name: '',
        description: '',
        price: 1,
        stock: 1,
        category: '',
        image: '',
    });
    const [loading, setloading] = useState(null);
    const navigate = useNavigate();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setproduct({ ...product, [name]: value });
    };

    const anyInputEmptyForm = Object.values(product).includes('');

    console.log(anyInputEmptyForm);
    const handleSubmit = (e) => {
        e.preventDefault();

        createProduct(product)
            .then((response) => {
                NotificationManager.success('Produto cadastrado com sucesso', 'Sucesso', 3000);
                navigate('/admin/product-manager');
            })
            .catch((error) => {
                NotificationManager.error('Erro ao cadastrar', 'Erro', 3000);
            });
    };

    const addImage = (e) => {
        e.preventDefault();
        var file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'u45m9vyq');
        setloading(1);
        axios.post(`https://api.cloudinary.com/v1_1/dxyv7aypq/image/upload`, formData).then((response) => {
            setloading(2);
            setproduct({ ...product, image: response.data.secure_url });
        });
    };

    return (
        <div className="product-form">
            <h1>Formulário do Produto</h1>
            <form>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={product.name}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="category">Categoría</label>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        value={product.category}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="price">Preço</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        min={1}
                        value={product.price}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="stock">Stock</label>
                    <input
                        type="number"
                        name="stock"
                        id="stock"
                        min={1}
                        value={product.stock}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="image">Imagem</label>
                    <input
                        type="file"
                        name="image"
                        id="image"
                        onChange={(e) => {
                            addImage(e);
                        }}
                    />
                </div>
                <div className="preview">
                    {loading === 1 ? (
                        <div className="loader"></div>
                    ) : loading === 2 ? (
                        <img src={product.image} alt="" width={200} height={200} style={{ objectFit: 'contain' }} />
                    ) : null}
                </div>
                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        value={product.description}
                        onChange={(e) => {
                            handleChange(e);
                        }}
                    ></textarea>
                </div>
                <div className="form-btn">
                    <button
                        disabled={anyInputEmptyForm}
                        type="submit"
                        onClick={(e) => {
                            handleSubmit(e);
                        }}
                    >
                        Confirmar
                    </button>
                </div>
            </form>
        </div>
    );
}
