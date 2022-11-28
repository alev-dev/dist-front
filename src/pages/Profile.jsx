import axios from 'axios';
import React, { useEffect, useState } from 'react';
import NotificationManager from 'react-notifications/lib/NotificationManager';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { getUserById, updateUser } from '../services/user.service';

export default function Profile() {
    const { user: userContext } = useAppContext();
    const [user, setUser] = useState({
        name: '',
        lastName: '',
        email: '',
        sex: '',
        birthDate: '',
        password: '',
        address: {
            cep: '',
            city: '',
            num: '',
            bairro: '',
            logradouro: '',
            uf: '',
        },
    });
    const navigate = useNavigate();
    const anyInputEmptyForm = Object.values(user).includes('') || Object.values(user.address).includes('');

    useEffect(() => {
        if (userContext?._id) {
            getUserById(userContext._id).then((response) => {
                setUser({ ...response.data, birthDate: response.data.birthDate.split('T')[0] });
            });
        }
    }, [userContext]);

    function setUserData(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function setAddress(e) {
        setUser({ ...user, address: { ...user.address, [e.target.name]: e.target.value } });
    }
    function getAdress(search) {
        axios
            .get(`https://viacep.com.br/ws/${search}/json/`)
            .then((response) => {
                setUser({
                    ...user,
                    address: {
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

    function onSubmit(e) {
        e.preventDefault();
        updateUser(userContext._id, user).then((response) => {
            NotificationManager.success('Cadastro atualizado com sucesso', 'Sucesso', 3000);
            navigate('/');
        });
    }

    if (user.name)
        return (
            <div className="user-form">
                <h1>Profile</h1>
                <form>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" value={user.name} onChange={(e) => setUserData(e)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={user.email}
                            onChange={(e) => setUserData(e)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={user.password}
                            onChange={(e) => setUserData(e)}
                        />
                    </div>
                    <div className="label-float" id="labelsex">
                        <label htmlFor="usuario" id="label">
                            Sexo:
                        </label>
                        <select name="sex" onChange={(e) => setUserData(e)} id="sexo" value={user.sex}>
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>
                    <div className="label-float" id="labelsex">
                        <label htmlFor="usuario" id="label">
                            Data de Nascimento
                        </label>
                        <input type="date" name="birthDate" onChange={(e) => setUserData(e)} value={user.birthDate} />
                    </div>

                    <h1 className="h12">Endereço</h1>

                    <div className="label-float">
                        <input
                            type="text"
                            id="cep"
                            maxLength="9"
                            onBlur={(e) => getAdress(e.target.value)}
                            required
                            value={user.address.cep}
                        />
                        <label htmlFor="endereco">CEP</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="text"
                            id="logradouro"
                            required
                            name="logradouro"
                            onChange={(e) => setAddress(e)}
                            value={user.address.logradouro}
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
                            value={user.address.bairro}
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
                            value={user.address.city}
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
                            value={user.address.num}
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
                            value={user.address.uf}
                        />
                        <label htmlFor="endereco">UF</label>
                    </div>
                    <div className="justify-center">
                        <button
                            type="submit"
                            className="btn btn-secondary"
                            disabled={anyInputEmptyForm}
                            onClick={(e) => onSubmit(e)}
                        >
                            Salvar
                        </button>
                    </div>
                </form>
            </div>
        );
}
