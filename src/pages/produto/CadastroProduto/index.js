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
        console.log(inputsAtualizados);
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

        console.log('ok');
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

        console.log(categoria);
        console.log(nome)

        fetch('http://localhost:4000/products/register', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({
                nome: nome,
                categoria: categoria,
                volume: volume,
                localArmazenamento: localArmazenamento,
                descricao: descricaoProduto,
                preco: 1,
                unidadeMedida: 'L',
                fornecedor: 1
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    document.querySelector("#nome").value = ""
                    document.querySelector("#categoria").value = "";
                    document.querySelector("#volume").value = "";
                    document.querySelector("#localArmazenamento").value = "";
                    document.querySelector("#descricaoProduto").value = "";
                    alert('produto cadastrado com sucesso!');
                }
            }).catch(e => console.log(e));

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

        if (document.querySelector("#categoria")) {
            let i, L = categoria.options.length - 1;
            for(i = L; i >= 0; i--) {
                categoria.remove(i);
            }
        }

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

    const listarProdutos = () => {

        const buscarProduto = document.querySelector("#BuscarProduto");

        if (document.querySelector("#buscarProduto")) {
            let i, L = buscarProduto.options.length - 1;
            for(i = L; i >= 0; i--) {
                buscarProduto.remove(i);
            }
        }

        if (buscarProduto) {
            fetch('http://localhost:4000/products', {
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
                        document.querySelector("#BuscarProduto").appendChild(opt);
                    }
                });
        }
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
                {listarProdutos()}
            </fieldset>
            <Botoes botoes={botoes}/>
        </div>
    );
};

export default CadastroProduto;
