import React from 'react';
import './cadastro.css';

export default function Register() {
    return (
        <div>
            <div className="container-cadastro">
                <div className="card-cadastro">
                    <h1>Cadastro</h1>
                    <div className="label-float">
                        <input type="text" id="nome" placeholder="" required />
                        <label htmlFor="nome">Nome</label>
                    </div>
                    <div className="label-float">
                        <input type="text" id="sobrenome" placeholder="" required />
                        <label htmlFor="sobrenome">Sobrenome</label>
                    </div>
                    <div className="label-float">
                        <input type="email" id="email" placeholder="" required />
                        <label htmlFor="usuario">Email</label>
                    </div>
                    <div className="label-float" id="labelsex">
                        <label htmlFor="usuario" id="label">
                            Sexo:
                        </label>
                        <select name="sexo" id="sexo">
                            <option value="Feminino">Feminino</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>
                    <div className="label-float" id="labelsex">
                        <label htmlFor="usuario" id="label">
                            Data de Nascimento
                        </label>
                        <input type="date" name="dataNasc" id="" />
                    </div>
                    <div className="label-float">
                        <input type="password" id="senha" placeholder="" required />
                        <label htmlFor="usuario">Senha</label>
                        <i id="verSenha" className="fa fa-eye" aria-hidden="true"></i>
                    </div>
                    <form className="label-float">
                        <input type="password" id="confsenha" placeholder="" required />
                        <label htmlFor="confsenha">Confirmar senha</label>
                        <i id="verConfirmSenha" className="fa fa-eye" aria-hidden="true"></i>
                    </form>

                    <h1 className="h12">Endereço</h1>

                    <div className="label-float">
                        <input type="text" id="cep" maxLength="9" placeholder="" required />
                        <label htmlFor="endereco">CEP</label>
                    </div>
                    <div className="label-float">
                        <input type="text" id="logradouro" placeholder="" required />
                        <label htmlFor="endereco">Logradouro</label>
                    </div>
                    <div className="label-float">
                        <input type="text" id="bairro" placeholder="" required />
                        <label htmlFor="endereco">Bairro</label>
                    </div>
                    <div className="label-float">
                        <input type="text" id="localidade" placeholder="" required />
                        <label htmlFor="endereco">Cidade</label>
                    </div>
                    <div className="label-float">
                        <input type="text" id="numRes" placeholder="" required />
                        <label htmlFor="endereco">Numero</label>
                    </div>
                    <div className="label-float">
                        <input type="text" id="uf" maxLength="2" placeholder="" required />
                        <label htmlFor="endereco">UF</label>
                    </div>
                    <div id="error" className="hidden">
                        <p id="errorText"></p>
                    </div>

                    <div className="justify-center">
                        <button>Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
