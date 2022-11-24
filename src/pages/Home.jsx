import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../components/CustomCard';
export default function Home() {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        // Fetch data from API
        axios.get('https://dist-back.herokuapp.com/product').then((response) => {
            setproducts(response.data);
        });
    }, []);

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
                    <h1>Seja bem vindo a nossa Distribuidora</h1>
                    <p>Conheça nossos produtos</p>
                </div>
            </header>
            <div className="products">
                {products.map((product) => (
                    <CustomCard {...product} key={product._id} buttonText={'Adicionar no carrinho'} />
                ))}
            </div>
        </div>
    );
}
