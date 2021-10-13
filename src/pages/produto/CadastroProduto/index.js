import Botoes from "../../../components/Botoes";
import { inputs, buscarProduto } from "./model";
import { useState } from "react";

const CadastroProduto = () => {
  const botoes = [
    {
      nome: "Cadastrar",
      classe: "botaoCadastrar",
      onClick: () => confirmarCamposReact(),
    } /*
  {
    nome:"Excluir",
    classe:"botaoExcluir",
    onClick: () => excluirCampos(),
  },*/,
    {
      nome: "Limpar",
      classe: "botaoLimpar",
      onClick: () => limparCamposReact(),
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
    inputs.map((inputAtual) => (
      <div className="itemFormulario">
        <label for={inputAtual.name}>{inputAtual.label}:</label>
        <br />
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
              style={{ border: !inputAtual.valid ? '1px solid red' : '', backgroundColor:!inputAtual.valid ? '#FFC0CB' : ''}}
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
              onChange={(e) => {mudarValueInput(e, inputAtual)}}
              style={{ border: !inputAtual.valid ? '1px solid red' : '', backgroundColor:!inputAtual.valid ? '#FFC0CB' : ''}}
            > {
              inputAtual.options.map((option) => (<option value={option.value}> {option.text} </option>))
            }</select>
          )
        }
      </div>
    ));

    const limparCamposReact = (e) => {
      e.preventDefault();
      const camposAtualizados = inputsReact.map((input) => ({...input, value : ''}))
      setInputReact(camposAtualizados)
    }

    const confirmarCamposReact = (e) => {
      e.preventDefault();
      const validarCampos = inputsReact.map((input) => ({...input, value : input.valid !== ''}))
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
      </fieldset>
      <Botoes botoes={botoes} />
    </div>
  );
};

export default CadastroProduto;