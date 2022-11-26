import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CustomCard from '../components/CustomCard';

export default function Category() {
    const [products, setproducts] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        // Fetch data from API
        axios.get(`https://dist-back.herokuapp.com/product/category/${category}`).then((response) => {
            setproducts(response.data);
        });
    }, [category]);

    return (
        <div>
            <div className="category-header">
                <h2>Produtos da categoria </h2>
                <h2 style={{ fontStyle: 'italic' }}>{category}</h2>
            </div>
            <div className="products">
                {products.map((product) => (
                    <CustomCard product={product} key={product._id} buttonText={'Adicionar no carrinho'} />
                ))}
            </div>
        </div>
    );
}
