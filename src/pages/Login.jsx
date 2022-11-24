import React from 'react';
import './login.css';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
    return (
        <div>
            <div class="container-login">
                <div class="login-card">
                    <h1>Login</h1>
                    <div class="label-float">
                        <input type="text" id="usuario" placeholder="" required onChange={() => click()} />
                        <label for="usuario">Usuário</label>
                    </div>
                    <div class="label-float">
                        <input type="password" id="senha" placeholder="" required onChange={() => click()} />
                        <label for="usuario">Senha</label>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    <div class="justify-center">
                        <button onClick={() => click()}>Entrar</button>
                    </div>
                    <div class="justify-center">
                        <hr />
                    </div>
                    <p class="justify-center">Não tem uma conta?</p>
                    <a href="cadastro.html" class="justify-center">
                        Cadastre-se
                    </a>
                </div>
            </div>
        </div>
    );
}
