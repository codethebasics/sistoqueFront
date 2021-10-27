import Botoes from "../../../components/Botoes";
import {inputs, buscarProduto} from "./model";
import {useState} from "react";

const CadastroProduto = () => {
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
                    inputAtual.type != 'select' && inputAtual.type != "textarea" ? (
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
                        ) :
                        inputAtual.type == "textarea" ? (
                                <textarea
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
                                ></textarea>
                            )
                            : (
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
                                    (inputAtual.options || []).map((option) => (
                                        <option value={option.value}> {option.text} </option>))
                                }</select>
                            )
                }
            </div>
        ));

    const limparCamposReact = (e) => {
        e.preventDefault();
        const camposAtualizados = inputsReact.map((input) => ({...input, value: ''}))
        setInputReact(camposAtualizados)
    }

    const confirmarCamposReact = (e) => {
        e.preventDefault();
        const validarCampos = inputsReact.map((input) => ({
            ...input,
            valid: input.required ? input.value !== '' : true
        }))
        setInputReact(validarCampos);

        const nome = document.querySelector("#nome").value
        const categoria = document.querySelector("#categoria").value
        const volume = document.querySelector("#volume").value
        const localArmazenamento = document.querySelector("#localArmazenamento").value
        const descricaoProduto = document.querySelector("#descricaoProduto").value

        console.log('cadastrando produto...');
        console.log(nome);
        console.log(categoria);
        console.log(volume);
        console.log(localArmazenamento);
        console.log(descricaoProduto);

        // fetch('http://localhost:4000/providers/register', {
        //     method: 'post',
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': `Bearer ${localStorage.getItem('token')}`
        //     },
        //     body: JSON.stringify({
        //         razaoSocial: razaoSocial,
        //         nomeFantasia: nomeFantasia,
        //         cnpj: cnpj,
        //         email: 'email@fornecedor.com',
        //         telefone: telefone,
        //         site: site,
        //         celular: celular,
        //         cep: cep,
        //         nomeEndereco: logradouro,
        //         numero: numero,
        //         complemento: complemento,
        //         bairro: bairro,
        //         cidade: cidade,
        //         estado: estado,
        //         representante: 1,
        //         celularRepresentante: celularRepresentante
        //     })
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         if (data) {
        //             console.log(data);
        //             document.querySelector("#razaoSocial").value = ""
        //             document.querySelector("#nomeFantasia").value = "";
        //             document.querySelector("#CNPJ").value = "";
        //             document.querySelector("#telefone").value = "";
        //             document.querySelector("#celular").value = "";
        //             document.querySelector("#site").value = "";
        //             document.querySelector("#representante").value = "";
        //             document.querySelector("#celularRepresentante").value = "";
        //             document.querySelector("#CEP").value = "";
        //             document.querySelector("#nomeLogradouro").value = "";
        //             document.querySelector("#numero").value = "";
        //             document.querySelector("#complemento").value = "";
        //             document.querySelector("#bairro").value = "";
        //             document.querySelector("#cidade").value = "";
        //             document.querySelector("#estado").value = "";
        //         }
        //     }).catch(e => console.log(e));

    }

    const renderizarCamposBuscarProdutoReact = () =>
        buscarProduto.map((BuscarProdutoAtual) => (
            <div className="itemFormulario">
                <label for={BuscarProdutoAtual.name}>{BuscarProdutoAtual.label}:</label>
                <br/>
                <select
                    placeholder={BuscarProdutoAtual.placeholder}
                    name={BuscarProdutoAtual.name}
                    id={BuscarProdutoAtual.id}
                    required={BuscarProdutoAtual.required}
                    value={BuscarProdutoAtual.value}
                    className={BuscarProdutoAtual.classe}
                    disabled={BuscarProdutoAtual.disabled}

                />
            </div>
        ));

    const listarCategorias = () => {

        const categoria = document.querySelector("#categoria");

        fetch('http://localhost:4000/categories', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let opt = document.createElement('option');
                    opt.value = data[i].id;
                    opt.innerHTML = data[i].nome;
                    document.querySelector("#categoria").appendChild(opt);
                }
            });
    };

    return (
        <div className="Formulario">
            <h2>Cadastrar Produto</h2>
            <fieldset>
                {/*renderizarCampos()*/}
                {renderizarCamposBuscarProdutoReact()}
            </fieldset>
            <fieldset>
                {/*renderizarCampos()*/}
                {renderizarCamposReact()}
                {listarCategorias()}
            </fieldset>
            <Botoes botoes={botoes}/>
        </div>
    );
};

export default CadastroProduto;
