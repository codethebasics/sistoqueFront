import Botoes from "../../../components/Botoes";
import {inputs, inputsEndereco} from "./model";
import {useState} from "react";

const CadastroFornecedor = () => {
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
    const [inputsEnderecoReact, setInputEnderecoReact] = useState(inputsEndereco);

    const mudarValueInput = (e, input) => {
        const htmlInputs = e.target;
        input.value = htmlInputs.value;
        const inputsAtualizados = inputsReact.map((inputsReactAtual) => {
            if (inputsReactAtual.id == input.id) return input;
            else return inputsReactAtual;
        });
        console.log("chamou")
        setInputReact(inputsAtualizados)
    };

    const renderizarCamposReact = () =>
        inputsReact.map((inputAtual) => (
            <div className="itemFormulario" key={inputAtual.id}>
                <label for={inputAtual.name}>{inputAtual.label}:</label>
                <br/>
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
            </div>
        ));

    const mudarValueInputEndereco = (e, input) => {
        const htmlInputs = e.target;
        input.value = htmlInputs.value;
        const inputsAtualizados = inputsReact.map((inputsReactAtual) => {
            if (inputsReactAtual.id == input.id) return input;
            else return inputsReactAtual;
        });
        setInputReact(inputsAtualizados)
    };

    const buscarCep = async (cep) => {

        if (cep == '' || cep.length < 8 || cep.length > 9) {
            return
        }
        try {
            const retornoViaCep =
                await fetch("https://viacep.com.br/ws/" + cep + "/json/")
            const jsonViaCep = await retornoViaCep.json()
            const enderecoCompleto = inputsEnderecoReact.map((input) => (
                {
                    ...input,
                    value: jsonViaCep[input.name] || ""
                }
            ))
            setInputEnderecoReact(enderecoCompleto);
        } catch (e) {
            console.log(e);
        }
    }

    const renderizarCamposEnderecoReact = () =>
        inputsEnderecoReact.map((inputEnderecoAtual) => (
            <div className="itemFormulario" key={inputEnderecoAtual.id}>
                <label for={inputEnderecoAtual.name}>{inputEnderecoAtual.label}:</label>
                <br/>
                <input
                    placeholder={inputEnderecoAtual.placeholder}
                    name={inputEnderecoAtual.name}
                    id={inputEnderecoAtual.id}
                    type={inputEnderecoAtual.type}
                    required={inputEnderecoAtual.required}
                    value={inputEnderecoAtual.value}
                    className={inputEnderecoAtual.classe}
                    disabled={inputEnderecoAtual.disabled}
                    width={inputEnderecoAtual.tamanho}
                    onChange={(e) => {
                        mudarValueInputEndereco(e, inputEnderecoAtual)
                        if (inputEnderecoAtual.name == 'cep') {
                            buscarCep(inputEnderecoAtual.value)
                        }
                    }}
                    style={{
                        border: !inputEnderecoAtual.valid ? '1px solid red' : '',
                        backgroundColor: !inputEnderecoAtual.valid ? '#FFC0CB' : ''
                    }}

                />
            </div>
        ));

    const limparCamposReact = (e) => {
        e.preventDefault();
        const camposAtualizados = inputsReact.map((input) => ({...input, value: ''}))
        const camposEnderecoAtualizados = inputsEnderecoReact.map((input) => ({...input, value: ''}))

        setInputReact(camposAtualizados)
        setInputEnderecoReact(camposEnderecoAtualizados)

    }

    const confirmarCamposReact = (e) => {
        e.preventDefault();
        const validarCampos = inputsReact.map((input) => ({
            ...input,
            valid: input.required ? input.value !== '' : true
        }))
        setInputReact(validarCampos)
        const validarEnderecoCampos = inputsEnderecoReact.map((input) => ({
            ...input,
            valid: input.required ? input.value !== '' : true
        }))
        setInputEnderecoReact(validarEnderecoCampos)

        const razaoSocial = document.querySelector("#razaoSocial").value
        const nomeFantasia = document.querySelector("#nomeFantasia").value
        const cnpj = document.querySelector("#CNPJ").value
        const telefone = document.querySelector("#telefone").value
        const celular = document.querySelector("#celular").value
        const site = document.querySelector("#site").value
        const representante = document.querySelector("#representante").value
        const celularRepresentante = document.querySelector("#celularRepresentante").value
        const cep = document.querySelector("#CEP").value
        const logradouro = document.querySelector("#nomeLogradouro").value
        const numero = document.querySelector("#numero").value
        const complemento = document.querySelector("#complemento").value
        const bairro = document.querySelector("#bairro").value
        const cidade = document.querySelector("#cidade").value
        const estado = document.querySelector("#estado").value

        fetch('http://localhost:4000/providers/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                razaoSocial: razaoSocial,
                nomeFantasia: nomeFantasia,
                cnpj: cnpj,
                email: 'email@fornecedor.com',
                telefone: telefone,
                site: site,
                celular: celular,
                cep: cep,
                nomeEndereco: logradouro,
                numero: numero,
                complemento: complemento,
                bairro: bairro,
                cidade: cidade,
                estado: estado,
                representante: 1,
                celularRepresentante: celularRepresentante
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    document.querySelector("#razaoSocial").value = ""
                    document.querySelector("#nomeFantasia").value = "";
                    document.querySelector("#CNPJ").value = "";
                    document.querySelector("#telefone").value = "";
                    document.querySelector("#celular").value = "";
                    document.querySelector("#site").value = "";
                    document.querySelector("#representante").value = "";
                    document.querySelector("#celularRepresentante").value = "";
                    document.querySelector("#CEP").value = "";
                    document.querySelector("#nomeLogradouro").value = "";
                    document.querySelector("#numero").value = "";
                    document.querySelector("#complemento").value = "";
                    document.querySelector("#bairro").value = "";
                    document.querySelector("#cidade").value = "";
                    document.querySelector("#estado").value = "";
                }
            }).catch(e => console.log(e));
    }

    return (
        <div className="Formulario">
            <h2> Fornecedor</h2>
            <fieldset>
                {/*renderizarCampos()*/}
                {renderizarCamposReact()}
            </fieldset>
            <h3>
                <span>Endereço</span>
            </h3>
            <fieldset>
                {renderizarCamposEnderecoReact()}
                {/*renderizarCamposEndereco()*/}
            </fieldset>
            <Botoes botoes={botoes}/>
        </div>
    );
};

export default CadastroFornecedor;
