import Botoes from "../../../components/Botoes";
import {inputs, inputsLogin} from "./model";
import {useState} from "react";

const CadastroUsuario = () => {
    const botoes = [
        {
            nome: "Cadastrar",
            classe: "botaoCadastrar",
            onClick: (e) => confirmarCamposReact(e),
        } /*
  {
    nome:"Excluir",
    classe:"botaoExcluir",
    onClick: () => excluirCampos(),
  },*/,
        {
            nome: "Limpar",
            classe: "botaoLimpar",
            onClick: (e) => limparCamposReact(e),
        },
    ];

    const [inputsReact, setInputReact] = useState(inputs);
    const [inputsLoginReact, setInputLoginReact] = useState(inputsLogin);

    const mudarValueInput = (e, input) => {
        const htmlInputs = e.target;
        input.value = htmlInputs.value;
        const inputsAtualizados = inputsReact.map((inputsReactAtual) => {
            if (inputsReactAtual.id == input.id) return input;
            else return inputsReactAtual;
        });
        setInputReact(inputsAtualizados)
    };

    const renderizarCamposReact = () =>
        inputsReact.map((inputAtual) => (
            <div className="itemFormulario">
                <label for={inputAtual.name}>{inputAtual.label}:</label>
                <br/>
                {
                    inputAtual.type != 'select' ? (
                        <input
                            placeholder={inputAtual.placeholder}
                            name={inputAtual.name}
                            id={inputAtual.id}
                            type={inputAtual.type}
                            required={inputAtual.required}
                            value={inputAtual.value}
                            disabled={inputAtual.disabled}
                            className={inputAtual.classe}
                            onChange={(e) => {
                                mudarValueInput(e, inputAtual)
                            }}
                            style={{
                                border: !inputAtual.valid ? '1px solid red' : '',
                                backgroundColor: !inputAtual.valid ? '#FFC0CB' : ''
                            }}
                        />
                    ) : (
                        <select
                            placeholder={inputAtual.placeholder}
                            name={inputAtual.name}
                            id={inputAtual.id}
                            required={inputAtual.required}
                            value={inputAtual.value}
                            disabled={inputAtual.disabled}
                            className={inputAtual.classe}
                            onChange={(e) => {
                                mudarValueInput(e, inputAtual)
                            }}
                            style={{
                                border: !inputAtual.valid ? '1px solid red' : '',
                                backgroundColor: !inputAtual.valid ? '#FFC0CB' : ''
                            }}
                        > {
                            inputAtual.options.map((option) => (<option value={option.value}> {option.text} </option>))
                        }</select>
                    )
                }
            </div>
        ));

    const mudarValueInputLogin = (e, input) => {
        console.log(e);
        const htmlInputs = e.target;
        input.value = htmlInputs.value;
        const inputsAtualizados = inputsLoginReact.map((inputsReactAtual) => {
            if (inputsReactAtual.id == input.id) return input;
            else return inputsReactAtual;
        });
        setInputReact(inputsAtualizados)
    };

    const renderizarCamposLoginReact = () =>
        inputsLoginReact.map((inputLoginAtual) => (
            <div className="itemFormulario">
                <label for={inputLoginAtual.name}>{inputLoginAtual.label}:</label>
                <br/>
                <input
                    placeholder={inputLoginAtual.placeholder}
                    name={inputLoginAtual.name}
                    id={inputLoginAtual.id}
                    type={inputLoginAtual.type}
                    required={inputLoginAtual.required}
                    value={inputLoginAtual.value}
                    disabled={inputLoginAtual.disabled}
                    className={inputLoginAtual.classe}
                    onChange={(e) => {
                        mudarValueInputLogin(e, inputLoginAtual)
                    }}
                    style={{
                        border: !inputLoginAtual.valid ? '1px solid red' : '',
                        backgroundColor: !inputLoginAtual.valid ? '#FFC0CB' : ''
                    }}
                />
            </div>
        ));

    const limparCamposReact = (e) => {
        e.preventDefault();
        const camposAtualizados = inputsReact.map((input) => ({...input, value: ''}))
        const camposinputsLoginReact = inputsLoginReact.map((input) => ({...input, value: ''}))
        setInputReact(camposAtualizados)
        setInputLoginReact(camposinputsLoginReact)
    }

    const confirmarCamposReact = (e) => {
        e.preventDefault();
        const validarCampos = inputsReact.map((input) => ({
            ...input,
            valid: input.required ? input.value !== '' : true
        }))
        const camposinputsLoginReact = inputsLoginReact.map((input) => ({
            ...input,
            valid: input.required ? input.value !== '' : true
        }))
        setInputReact(validarCampos)
        setInputLoginReact(camposinputsLoginReact)

        console.log(validarCampos);
        console.log(camposinputsLoginReact);

        // fetch('http://localhost:4000/users/register', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         "nome": "Glaucia",
        //         "cargo": "Desenvolvedora",
        //         "dataNascimento": "01/03/2001",
        //         "cpf": "11321.111.111-11",
        //         "rg": "232.3222.222-2",
        //         "telefone": "3222-4556",
        //         "tipoUsuario": 1,
        //         "login": "gl1e13q31s",
        //         "senha": "glauc3ia12yoo3"
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data.token) {
        //             localStorage.setItem('token', data.token);
        //             history.push('/sistema');
        //         }
        //         else {
        //             alert('login ou senha inválidos');
        //             document.querySelector("#txt_email").value = "";
        //             const password = document.querySelector("#txt_password").value = "";
        //         }
        //     });
    }

    return (
        <div className="Formulario">
            <h2> Usuario</h2>
            <fieldset>
                {/*renderizarCampos()*/}
                {renderizarCamposReact()}
            </fieldset>
            <h3>
                <span>Login</span>
            </h3>
            <fieldset>
                {renderizarCamposLoginReact()}
                {/*renderizarCamposLogin()*/}
            </fieldset>
            <Botoes botoes={botoes}/>
        </div>
    );
};

export default CadastroUsuario;
