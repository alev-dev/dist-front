import React, { useState } from 'react';
import './register.css';
import axios from 'axios';
import { NotificationManager } from 'react-notifications';
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [info, setInfo] = useState({
        name: '',
        lastName: '',
        email: '',
        sex: '',
        birthDate: new Date(),
        password: '',
        confirmPassword: '',
        adress: {
            cep: '',
            city: '',
            num: '',
            bairro: '',
            logradouro: '',
            uf: '',
        },
    });

    const navigate = useNavigate();

    const anyInputEmptyForm = Object.values(info).includes('') || Object.values(info.adress).includes('');

    function setInfos(e) {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    function setAddress(e) {
        setInfo({ ...info, adress: { ...info.adress, [e.target.name]: e.target.value } });
    }

    function onSubmit() {
        axios
            .post('https://dist-back.herokuapp.com/users', info)
            .then((response) => {
                NotificationManager.success('Cadastro realizado com sucesso', 'Sucesso', 3000);
                navigate('/login');
            })
            .catch((error) => {
                NotificationManager.error('Erro ao cadastrar', 'Erro', 3000);
            });
    }

    function getAdress(search) {
        axios
            .get(`https://viacep.com.br/ws/${search}/json/`)
            .then((response) => {
                setInfo({
                    ...info,
                    adress: {
                        cep: search,
                        city: response.data.localidade,
                        bairro: response.data.bairro,
                        logradouro: response.data.logradouro,
                        uf: response.data.uf,
                    },
                });
            })
            .catch((e) => console.log('Error: ' + e));
    }

    return (
        <div>
            <div className="container-cadastro">
                <div className="card-cadastro">
                    <h1>Cadastro</h1>
                    <div className="label-float">
                        <input
                            type="text"
                            id="nome"
                            required
                            name="name"
                            onChange={(e) => setInfos(e)}
                            value={info.name}
                        />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="sobrenome"
                            required
                            name="lastName"
                            onChange={(e) => setInfos(e)}
                            value={info.lastName}
                        />
                        <label htmlFor="sobrenome">Sobrenome</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="email"
                            id="email"
                            required
                            name="email"
                            onChange={(e) => setInfos(e)}
                            value={info.email}
                        />
                        <label htmlFor="usuario">Email</label>
                    </div>
                    <div className="label-float" id="labelsex">
                        <label htmlFor="usuario" id="label">
                            Sexo:
                        </label>
                        <select name="sex" onChange={(e) => setInfos(e)} id="sexo" value={info.sex}>
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="label-float" id="labelsex">
                        <label htmlFor="usuario" id="label">
                            Data de Nascimento
                        </label>
                        <input type="date" name="birthDate" onChange={(e) => setInfos(e)} value={info.birthDate} />
                    </div>
                    <div className="label-float">
                        <input
                            type="password"
                            id="senha"
                            name="password"
                            onChange={(e) => setInfos(e)}
                            required
                            value={info.password}
                        />
                        <label htmlFor="usuario">Senha</label>
                        <i id="verSenha" className="fa fa-eye" aria-hidden="true"></i>
                    </div>
                    <div className="label-float">
                        <input
                            type="password"
                            id="confsenha"
                            name="confirmPassword"
                            onChange={(e) => setInfos(e)}
                            required
                            value={info.confirmPassword}
                        />
                        <label htmlFor="confsenha">Confirmar senha</label>
                        <i id="verConfirmSenha" className="fa fa-eye" aria-hidden="true"></i>
                    </div>

                    <h1 className="h12">Endereço</h1>

                    <div className="label-float">
                        <input type="text" id="cep" maxLength="9" onBlur={(e) => getAdress(e.target.value)} required />
                        <label htmlFor="endereco">CEP</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="logradouro"
                            required
                            name="logradouro"
                            onChange={(e) => setAddress(e)}
                            value={info.adress.logradouro}
                        />
                        <label htmlFor="endereco">Logradouro</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="bairro"
                            placeholder=""
                            name="bairro"
                            onChange={(e) => setAddress(e)}
                            required
                            value={info.adress.bairro}
                        />
                        <label htmlFor="endereco">Bairro</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="localidade"
                            placeholder=""
                            name="city"
                            onChange={(e) => setAddress(e)}
                            required
                            value={info.adress.city}
                        />
                        <label htmlFor="endereco">Cidade</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="numRes"
                            placeholder=""
                            name="num"
                            required
                            value={info.adress.num}
                            onChange={(e) => setAddress(e)}
                        />
                        <label htmlFor="endereco">Numero</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="uf"
                            maxLength="2"
                            name="uf"
                            onChange={(e) => setAddress(e)}
                            placeholder=""
                            required
                            value={info.adress.uf}
                        />
                        <label htmlFor="endereco">UF</label>
                    </div>
                    <div id="error" className="hidden">
                        <p id="errorText"></p>
                    </div>
                    <div className="justify-center">
                        <button className="btn btn-primary" disabled={anyInputEmptyForm} onClick={() => onSubmit()}>
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
