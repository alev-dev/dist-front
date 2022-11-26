import React, { useState } from 'react';
import './login.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

export default function Login() {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });
    const { login } = useAppContext();
    const navigate = useNavigate();

    function setEmail(email) {
        setUser({ ...user, email });
    }

    function setPassword(password) {
        setUser({ ...user, password });
    }

    function loginHandle() {
        login(user, () => {
            navigate('/');
        });
    }

    return (
        <div>
            <div className="container-login">
                <div className="login-card">
                    <h1>Login</h1>
                    <div className="label-float">
                        <input
                            type="text"
                            id="usuario"
                            required
                            value={user.email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="usuario">Usuario</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="password"
                            id="senha"
                            required
                            value={user.password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label htmlFor="usuario">Senha</label>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div className="justify-center">
                        <button onClick={() => loginHandle()}>Entrar</button>
                    </div>
                    <div className="justify-center">
                        <hr />
                    </div>
                    <p className="justify-center">Não tem uma conta?</p>
                    <Link to="/register" className="justify-center">
                        Cadastre-se
                    </Link>
                </div>
            </div>
        </div>
    );
}
