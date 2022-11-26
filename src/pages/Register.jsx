import React, {useState} from 'react';
import "./register.css"
import axios from 'axios';

export default function Register() {

    const [info, setInfo] = useState({
        name: "",
        lastName: "",
        email: "",
        sex: "",
        birthDate: null,
        password: "",
        confirmPassword: "",
        adress: {
            cep: "",
            city: "",
            num: "",
            bairro: "",
            logradouro: "",
            uf: ""
        }
    });

    function setInfos(e) {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }

    function setNum(value) {
        setInfo({...info, adress: {...info.adress, num: value}})
    }

    function getAdress(search) {
        axios.get(`https://viacep.com.br/ws/${search}/json/`)
          .then( response => {
            setInfo({...info, adress: {
                cep: search,
                city: response.data.localidade,
                bairro: response.data.bairro,
                logradouro: response.data.logradouro,
                uf: response.data.uf,
            }})
          })
        .catch( e => console.log('Error: ' + e))
    }

    console.log(info)

    return <div>
            <div class="container-cadastro">
        <div class="card-cadastro">
            <h1>Cadastro</h1>
            <div class="label-float">
                <input type="text" id="nome" required name='name' onChange={(e) => setInfos(e)}/>
                <label for="nome">Nome</label> 
            </div>
            <div class="label-float">
                <input type="text" id="sobrenome" required name='lastName' onChange={(e) => setInfos(e)}/>
                <label for="sobrenome">Sobrenome</label>
            </div>
            <div class="label-float">
                <input type="email" id="email"  required name='email' onChange={(e) => setInfos(e)}/>
                <label for="usuario">Email</label>
            </div>
            <div class="label-float" id="labelsex">
                <label for="usuario" id="label">Sexo:</label>
                <select name="sex" onChange={(e) => setInfos(e)} id="sexo">
                    <option value="Feminino">Feminino</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Outro">Outro</option>
                </select>
            </div>
            <div class="label-float" id="labelsex">
                <label for="usuario" id="label">Data de Nascimento</label>
                <input type="date" name="birthDate" onChange={(e) => setInfos(e)}/>
            </div>
            <div class="label-float">
                <input type="password" id="senha" name='password' onChange={(e) => setInfos(e)} required/>
                <label for="usuario">Senha</label>
                <i id="verSenha" class="fa fa-eye" aria-hidden="true"></i>
            </div>
            <div class="label-float">
                <input type="password" id="confsenha" name='confirmPassword' onChange={(e) => setInfos(e)} required/>
                <label for="confsenha">Confirmar senha</label>
                <i id="verConfirmSenha" class="fa fa-eye" aria-hidden="true"></i>
            </div>

            <h1 class="h12">Endereço</h1>

            <div class="label-float">
                <input type="text" id="cep" maxlength="9" onBlur={(e) => getAdress(e.target.value)}  required/>
                <label for="endereco">CEP</label>
            </div>
            <div class="label-float">
                <input type="text" id="logradouro" required value={info.adress.logradouro}/>
                <label for="endereco">Logradouro</label> 
            </div>
            <div class="label-float">
                <input type="text" id="bairro" placeholder="" required value={info.adress.bairro}/>
                <label for="endereco">Bairro</label> 
            </div>
            <div class="label-float">
                <input type="text" id="localidade" placeholder="" required value={info.adress.city}/>
                <label for="endereco">Cidade</label> 
            </div>
            <div class="label-float">
                <input type="text" id="numRes" placeholder="" required value={info.adress.num} onChange={(e) => setNum(e.target.value) }/>
                <label for="endereco">Numero</label> 
            </div>
            <div class="label-float">
                <input type="text" id="uf" maxlength="2" placeholder="" required value={info.adress.uf}/>
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
