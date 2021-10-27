import Botoes from "../../../components/Botoes";
import { inputs, buscarProduto } from "./model";
import { useState } from "react";

const EditarProduto = () => {
  const botoes = [
    {
      nome: "Cadastrar",
      classe: "botaoCadastrar",
      onClick: (e) => confirmarCamposReact(e),
    },
  ];

  const [inputsReact, setInputReact] = useState(inputs);

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
      const validarCampos = inputsReact.map((input) => ({...input, valid : input.required ? input.value !== '' : true}))
      setInputReact(validarCampos)
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
        {renderizarCamposReact()}
        {listarCategorias()}
      </fieldset>
      <Botoes botoes={botoes} />
    </div>
  );
};

export default EditarProduto;
