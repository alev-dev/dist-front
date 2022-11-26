import React from 'react';
import './login.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
    function click() {
        console.log('click');
    }

    return (
        <div>
            <div className="container-login">
                <div className="login-card">
                    <h1>Login</h1>
                    <div className="label-float">
                        <input type="text" id="usuario" placeholder="" required onChange={() => click()} />
                        <label htmlFor="usuario">Usuário</label>
                    </div>
                    <div className="label-float">
                        <input
                            type="password"
                            id="senha"
                            placeholder=""
                            required
                            onChange={() => click()}
                            onBlur={(e) => console.log('focus', e)}
                        />
                        <label htmlFor="usuario">Senha</label>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div className="justify-center">
                        <button onClick={() => click()}>Entrar</button>
                    </div>

                    <div className="justify-center">
                        <hr />
                    </div>
                    <p className="justify-center">Não tem uma conta?</p>
                    <a href="cadastro.html" className="login-a justify-center">
                        Cadastre-se
                    </a>
                </div>
            </div>
        </div>
    );
}
