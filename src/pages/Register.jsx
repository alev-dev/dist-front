import React from 'react';
import "./cadastro.css"

export default function Register() {
    return <div>
            <div class="container-cadastro">
        <div class="card-cadastro">
            <h1>Cadastro</h1>
            <div class="label-float">
                <input type="text" id="nome" placeholder="" required/>
                <label for="nome">Nome</label> 
            </div>
            <div class="label-float">
                <input type="text" id="sobrenome" placeholder="" required/>
                <label for="sobrenome">Sobrenome</label>
            </div>
            <div class="label-float">
                <input type="email" id="email" placeholder="" required/>
                <label for="usuario">Email</label>
            </div>
            <div class="label-float" id="labelsex">
                <label for="usuario" id="label">Sexo:</label>
                <select name="sexo" id="sexo">
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div class="label-float" id="labelsex">
                <label for="usuario" id="label">Data de Nascimento</label>
                <input type="date" name="dataNasc" id=""/>
            </div>
            <div class="label-float">
                <input type="password" id="senha" placeholder="" required/>
                <label for="usuario">Senha</label>
                <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
            </div>
            <div class="label-float">
                <input type="password" id="confsenha" placeholder="" required/>
                <label for="confsenha">Confirmar senha</label>
                <i id="verConfirmSenha" class="fa fa-eye" aria-hidden="true"></i>
            </div>

            <h1 class="h12">Endereço</h1>

            <div class="label-float">
                <input type="text" id="cep" maxlength="9" placeholder=""  required/>
                <label for="endereco">CEP</label>
            </div>
            <div class="label-float">
                <input type="text" id="logradouro" placeholder="" required/>
                <label for="endereco">Logradouro</label> 
            </div>
            <div class="label-float">
                <input type="text" id="bairro" placeholder="" required/>
                <label for="endereco">Bairro</label> 
            </div>
            <div class="label-float">
                <input type="text" id="localidade" placeholder="" required/>
                <label for="endereco">Cidade</label> 
            </div>
            <div class="label-float">
                <input type="text" id="numRes" placeholder="" required/>
                <label for="endereco">Numero</label> 
            </div>
            <div class="label-float">
                <input type="text" id="uf" maxlength="2" placeholder="" required/>
                <label for="endereco">UF</label> 
            </div>
            <div id="error" class="hidden">
                <p id="errorText"></p>
            </div>


            <div class="justify-center">
                <button>Cadastrar</button>
            </div>
        </div>
    </div>
    </div>;
}
