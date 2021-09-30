import { inputs, buscarUsuario } from "./model";
import Botoes from '../../../components/Botoes'
import { useState } from "react";

const ConsultarUsuario = () => {


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

  const mudarValueInputEndereco = (e, input) => {
      const htmlInputs = e.target;
      input.value = htmlInputs.value;
      const inputsAtualizados = inputsReact.map((inputsReactAtual) => {
        if (inputsReactAtual.id == input.id) return input;
        else return inputsReactAtual;
      });
      setInputReact(inputsAtualizados)
    };

  // const renderizarCamposEnderecoReact = () =>
  //   inputsEndereco.map((inputEnderecoAtual) => (
  //     <div className="itemFormulario">
  //       <label for={inputEnderecoAtual.name}>{inputEnderecoAtual.label}:</label>
  //       <br />
  //       <input
  //         placeholder={inputEnderecoAtual.placeholder}
  //         name={inputEnderecoAtual.name}
  //         id={inputEnderecoAtual.id}
  //         type={inputEnderecoAtual.type}
  //         required={inputEnderecoAtual.required}
  //         value={inputEnderecoAtual.value}
  //         disabled={inputEnderecoAtual.disabled}
  //         onChange={(e) => mudarValueInputEndereco(e, inputEnderecoAtual)}

  //       />
  //     </div>
  //   ));

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
      <h2>Editar Usuario</h2>
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposBuscarUsuarioReact()}
      </fieldset>
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposReact()}
      </fieldset>
      <h3>
        <span>Login e Senha</span>
      </h3>
      <fieldset>
        {/* {renderizarCamposEnderecoReact()} */}
        {/*renderizarCamposEndereco()*/}
      </fieldset>
    </div>
  );
};

export default ConsultarUsuario;