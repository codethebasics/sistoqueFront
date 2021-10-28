import {inputs, buscarProduto} from "./model";
import Botoes from '../../../components/Botoes';
import {useState} from "react";

const ConsultarProduto = () => {

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

    const listarCategorias = () => {

        const categoria = document.querySelector("#categoria");

        if (document.querySelector("#categoria")) {
            let i, L = categoria.options.length - 1;
            for (i = L; i >= 0; i--) {
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

        if (document.querySelector("#BuscarProduto")) {
            let i, L = buscarProduto.options.length - 1;
            for (i = L; i >= 0; i--) {
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
                        inputAtual.type == 'textarea' ? (
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
                                (inputAtual.options || []).map((option) => (
                                    <option value={option.value}> {option.text} </option>))
                            }</select>
                        )
                }
            </div>
        ));
    console.log({buscarProduto})
    const renderizarCamposBuscarProdutoReact = () =>
        (buscarProduto || []).map((BuscarProdutoAtual) => (
            <div className="itemFormulario">
                <label for={BuscarProdutoAtual.name}>{BuscarProdutoAtual.label}:</label>
                <br/>
                <select
                    placeholder={BuscarProdutoAtual.placeholder}
                    name={BuscarProdutoAtual.name}
                    id={BuscarProdutoAtual.id}
                    className={BuscarProdutoAtual.classe}
                    required={BuscarProdutoAtual.required}
                    value={BuscarProdutoAtual.value}
                    disabled={BuscarProdutoAtual.disabled}
                />
            </div>
        ));

    return (
        <div className="Formulario">
            <fieldset>
                {renderizarCamposBuscarProdutoReact()}
            </fieldset>
            <fieldset>
                {listarCategorias()}
                {listarProdutos()}
                {renderizarCamposReact()}
            </fieldset>
        </div>
    );
};

export default ConsultarProduto;
