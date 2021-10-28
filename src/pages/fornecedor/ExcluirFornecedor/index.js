import Botoes from "../../../components/Botoes";
import {inputs, buscarFornecedor} from "./model";
import {useState} from "react";
import Swal from 'sweetalert2';

const ExcluirFornecedor = () => {
    const botoes = [

        {
            nome: "Excluir",
            classe: "botaoExcluir",
            onClick: (e) => excluirFornecedor(e)
        },

    ];

    const listarFornecedores = () => {

        const BuscarFornecedor = document.querySelector("#BuscarFornecedor");

        if (document.querySelector("#BuscarFornecedor")) {
            let i, L = BuscarFornecedor.options.length - 1;
            for (i = L; i >= 0; i--) {
                BuscarFornecedor.remove(i);
            }
        }

        if (BuscarFornecedor) {
            fetch('http://localhost:4000/providers', {
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
                        opt.innerHTML = data[i].razaoSocial;
                        document.querySelector("#BuscarFornecedor").appendChild(opt);
                    }
                });
        }
    };

    const [inputsReact, setInputReact] = useState(inputs);
    const [buscarFornecedorReact, setInputbuscarFornecedorReact] = useState(buscarFornecedor);


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
                    className={inputAtual.classe}
                    disabled={inputAtual.disabled}
                    onChange={(e) => mudarValueInput(e, inputAtual)}
                />
            </div>
        ));

    const renderizarCamposBuscarFornecedorReact = () =>
        buscarFornecedorReact.map((BuscarFornecedorAtual) => (
            <div className="itemFormulario">
                <label for={BuscarFornecedorAtual.name}>{BuscarFornecedorAtual.label}:</label>
                <br/>
                <select
                    placeholder={BuscarFornecedorAtual.placeholder}
                    name={BuscarFornecedorAtual.name}
                    id={BuscarFornecedorAtual.id}
                    required={BuscarFornecedorAtual.required}
                    value={BuscarFornecedorAtual.value}
                    className={BuscarFornecedorAtual.classe}
                    disabled={BuscarFornecedorAtual.disabled}
                    style={{
                        border: !BuscarFornecedorAtual.valid ? '1px solid red' : '',
                        backgroundColor: !BuscarFornecedorAtual.valid ? '#FFC0CB' : ''
                    }}
                />
            </div>
        ));

    const excluirFornecedor = (e) => {
        e.preventDefault();
        fetch('http://localhost:4000/providers/' + document.querySelector("#BuscarFornecedor").value, {
            method: 'delete',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                Swal.fire({
                    title: "O fornecedor foi excluido",
                    icon: "success"
                })
            });
    }

    return (
        <div className="Formulario">
            <h2>Excluir Fornecedor</h2>
            <fieldset>
                {renderizarCamposBuscarFornecedorReact()}
                {/*renderizarCamposEndereco()*/}
            </fieldset>
            <fieldset>
                {/*renderizarCampos()*/}
                {listarFornecedores()}
                {renderizarCamposReact()}
            </fieldset>
            <Botoes botoes={botoes}/>
        </div>
    );
};

export default ExcluirFornecedor;
