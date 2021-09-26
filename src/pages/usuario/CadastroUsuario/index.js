import Botoes from "../../../components/Botoes";
import { inputs, inputsLogin } from "./model";
import { useState } from "react";

const CadastroUsuario = () => {
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

  const renderizarCamposLogin = () =>
    inputsLogin.map((inputLoginAtual) => (
      <div className="itemFormulario">
        <label for={inputLoginAtual.name}>{inputLoginAtual.label}:</label>
        <br />
        <input
          placeholder={inputLoginAtual.placeholder}
          name={inputLoginAtual.name}
          id={inputLoginAtual.id}
          type={inputLoginAtual.type}
          required={inputLoginAtual.required}
        />
      </div>
    ));

  const limparCampos = (e) => {
    //e.preventDefault();

    inputs.map((input) => {
      document.getElementById(input.id).value = "";
    });

    inputsLogin.map((input) => {
      document.getElementById(input.id).value = "";
    });
  };

  const confirmarCampos = (e) => {
    //e.preventDefault();

    inputs.map((input) => {
      const htmlInputs = document.getElementById(input.id);
      if (htmlInputs.value != "") {
        alert("Usuário Cadastrado com sucesso");
      } else {
        htmlInputs.style = "border: 1px solid red";
      }
    });

    inputsLogin.map((input) => {
      const htmlInputsLogin = document.getElementById(input.id);
      if (htmlInputsLogin.value != "") {
        alert("Usuário Cadastrado com sucesso");
      } else {
        htmlInputsLogin.style = "border: 1px solid red";
      }
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

  const mudarValueInputLogin = (e, input) => {
      const htmlInputs = e.target;
      input.value = htmlInputs.value;
      const inputsAtualizados = inputsReact.map((inputsReactAtual) => {
        if (inputsReactAtual.id == input.id) return input;
        else return inputsReactAtual;
      });
      setInputReact(inputsAtualizados)
    };

  const renderizarCamposLoginReact = () =>
    inputsLogin.map((inputLoginAtual) => (
      <div className="itemFormulario">
        <label for={inputLoginAtual.name}>{inputLoginAtual.label}:</label>
        <br />
        <input
          placeholder={inputLoginAtual.placeholder}
          name={inputLoginAtual.name}
          id={inputLoginAtual.id}
          type={inputLoginAtual.type}
          required={inputLoginAtual.required}
          value={inputLoginAtual.value}
          disabled={inputLoginAtual.disabled}
          onChange={(e) => mudarValueInputLogin(e, inputLoginAtual)}

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
      <h2>Cadastro novo Usuario</h2>
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposReact()}
      </fieldset>
      <h3>
        <span>Login</span>
      </h3>
      <fieldset>
        {renderizarCamposLoginReact()}
        {/*renderizarCamposLogin()*/}
      </fieldset>
      <Botoes botoes={botoes} />
    </div>
  );
};

export default CadastroUsuario;