import Botoes from "../../../components/Botoes";
import { inputs, buscarProduto } from "./model";
import { useState } from "react";
import Swal from 'sweetalert2';
const ExcluirProduto = () => {
  const botoes = [
    {
      nome: "Excluir",
      classe: "botaoExcluir",
      onClick: (e) => confirmarCamposReact(e),
    },
  ];

  const [inputsReact, setInputReact] = useState(inputs);

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
        <br />
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
              style={{ border: !inputAtual.valid ? '1px solid red' : '', backgroundColor:!inputAtual.valid ? '#FFC0CB' : ''}}
            />
          ) :
            inputAtual.type == "textarea"   ? (
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
              style={{ border: !inputAtual.valid ? '1px solid red' : '', backgroundColor:!inputAtual.valid ? '#FFC0CB' : ''}}
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
              onChange={(e) => {mudarValueInput(e, inputAtual)}}
              style={{ border: !inputAtual.valid ? '1px solid red' : '', backgroundColor:!inputAtual.valid ? '#FFC0CB' : ''}}
            > {
              (inputAtual.options || []).map((option) => (<option value={option.value}> {option.text} </option>))
            }</select>
          )
        }
      </div>
    ));

    const confirmarCamposReact = (e) => {
      e.preventDefault();
      Swal.fire({
          title: "Produto excluido",
          icon: "success"
      })
    }

    const renderizarCamposBuscarProdutoReact = () =>
      buscarProduto.map((BuscarProdutoAtual) => (
        <div className="itemFormulario">
          <label for={BuscarProdutoAtual.name}>{BuscarProdutoAtual.label}:</label>
          <br />
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

  return (
    <div className="Formulario">
      <h2>Editar Produto</h2>
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposBuscarProdutoReact()}
      </fieldset>
      <fieldset>
        {/*renderizarCampos()*/}
        {listarProdutos()}
        {renderizarCamposReact()}
      </fieldset>
      <Botoes botoes={botoes} />
    </div>
  );
};

export default ExcluirProduto;
