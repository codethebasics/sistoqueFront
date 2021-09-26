import Botoes from "../../../components/Botoes";
import { inputs, buscarFornecedor } from "./model";
import { useState } from "react";

const ExcluirFornecedor = () => {
  const botoes = [
    /*{
      nome: "Confirmar",
      classe: "botaoCadastrar",
      onClick: () => confirmarCamposReact(),
    } */
  {
    nome:"Excluir",
    classe:"botaoExcluir",
  },
    {
      nome: "Limpar",
      classe: "botaoLimpar",
      onClick: () => limparCamposReact(),
    },
  ];

  const renderizarCampos = () =>
    inputs.map((inputAtual) => (
      <div className="itemFormulario">
        <label for={inputAtual.name}>{inputAtual.label}:</label>
        <br />
        <input
          placeholder={inputAtual.placeholder}
          name={inputAtual.name}
          id={inputAtual.id}
          type={inputAtual.type}
          required={inputAtual.required}
        />
      </div>
    ));

  const limparCampos = (e) => {
    //e.preventDefault();

    inputs.map((input) => {
      document.getElementById(input.id).value = "";
    });

  };

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
        <input
          placeholder={inputAtual.placeholder}
          name={inputAtual.name}
          id={inputAtual.id}
          type={inputAtual.type}
          required={inputAtual.required}
          value={inputAtual.value}
          disabled={inputAtual.disabled}
          onChange={(e) => mudarValueInput(e, inputAtual)}
        />
      </div>
    ));

    const renderizarCamposBuscarFornecedorReact = () =>
      buscarFornecedor.map((BuscarFornecedorAtual) => (
        <div className="itemFormulario">
          <label for={BuscarFornecedorAtual.name}>{BuscarFornecedorAtual.label}:</label>
          <br />
          <select
            placeholder={BuscarFornecedorAtual.placeholder}
            name={BuscarFornecedorAtual.name}
            id={BuscarFornecedorAtual.id}
            required={BuscarFornecedorAtual.required}
            value={BuscarFornecedorAtual.value}
            disabled={BuscarFornecedorAtual.disabled}
  
          />
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

  return (
    <div className="Formulario">
      <h2>Excluir Fornecedor</h2>
      <fieldset>
        {renderizarCamposBuscarFornecedorReact()}
        {/*renderizarCamposEndereco()*/}
      </fieldset>
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposReact()}
      </fieldset>
      <Botoes botoes={botoes} />
    </div>
  );
};

export default ExcluirFornecedor;