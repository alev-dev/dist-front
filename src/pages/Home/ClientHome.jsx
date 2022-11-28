import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomCard from '../../components/CustomCard';
export default function ClientHome() {
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
                    <div className="header-text">
                        <h1>Seja bem-vindo a nossa Distribuidora</h1>
                    </div>
                    <div className="header-wave">
                        <div class="wave wave1"></div>
                        <div class="wave wave2"></div>
                        <div class="wave wave3"></div>
                        <div class="wave wave4"></div>
                    </div>
                </div>
            </header>
            <div className="header-text2">
                <p>Conheça nossos produtos</p>
            </div>
            <div className="products">
                {products.map((product) => (
                    <CustomCard product={product} key={product._id} buttonText={'Adicionar no carrinho'} />
                ))}
            </div>
        </div>
    );
}
