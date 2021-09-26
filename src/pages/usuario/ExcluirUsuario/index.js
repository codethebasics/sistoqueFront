import Botoes from "../../../components/Botoes";
import { inputs, buscarUsuario } from "./model";
import { useState } from "react";

const ExcluirUsuario = () => {
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

    const renderizarCamposBuscarUsuarioReact = () =>
      buscarUsuario.map((BuscarUsuarioAtual) => (
        <div className="itemFormulario">
          <label for={BuscarUsuarioAtual.name}>{BuscarUsuarioAtual.label}:</label>
          <br />
          <select
            placeholder={BuscarUsuarioAtual.placeholder}
            name={BuscarUsuarioAtual.name}
            id={BuscarUsuarioAtual.id}
            required={BuscarUsuarioAtual.required}
            value={BuscarUsuarioAtual.value}
            disabled={BuscarUsuarioAtual.disabled}
  
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
      <h2>Excluir Usuario</h2>
      <fieldset>
        {renderizarCamposBuscarUsuarioReact()}
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

export default ExcluirUsuario;