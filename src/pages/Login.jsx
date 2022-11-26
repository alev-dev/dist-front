import React, { useState } from 'react';
import "./login.css";
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {

    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    function setEmail(email) {
        setUser({...user, email});
    }

    function setPassword(password) {
        setUser({...user, password});
    }

    function login() {
        setUser({email: "", password: ""});
    }
    
    console.log(user);

    return <div>
        <div class="container-login">
            <div class="login-card">
                <h1>Login</h1>
                <div class="label-float">
                    <input type="text" id="usuario" required value={user.email} onChange={(e) => setEmail(e.target.value)} />
                    <label for="usuario">Usuario</label>
                </div>
                <div class="label-float">
                    <input type="password" id="senha" required value={user.password} onChange={(e) => setPassword(e.target.value)}/>
                    <label for="usuario">Senha</label>
                    <FontAwesomeIcon icon={faEye} />
                </div>
                <div class="justify-center">
                    <button onClick={() => login()}>Entrar</button>
                </div>
                <div class="justify-center">
                    <hr />
                </div>
                <p class="justify-center">
                    Não tem uma conta?
                </p>
                <a href="cadastro.html" class="justify-center">Cadastre-se</a>
            </div>
        </div>
    </div>;
}
