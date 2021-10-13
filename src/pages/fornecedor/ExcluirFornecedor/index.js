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
    onClick: (e) => excluirCamposReact(e)
  },
    {
      nome: "Limpar",
      classe: "botaoLimpar",
      onClick: (e) => limparCamposReact(e),
    },
  ];

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
        <br />
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
          <br />
          <select
            placeholder={BuscarFornecedorAtual.placeholder}
            name={BuscarFornecedorAtual.name}
            id={BuscarFornecedorAtual.id}
            required={BuscarFornecedorAtual.required}
            value={BuscarFornecedorAtual.value}
            className={BuscarFornecedorAtual.classe}
            disabled={BuscarFornecedorAtual.disabled}
            style={{ border: !BuscarFornecedorAtual.valid ? '1px solid red' : '', backgroundColor:!BuscarFornecedorAtual.valid ? '#FFC0CB' : ''}}
          />
        </div>
      ));
  

    const limparCamposReact = (e) => {
      e.preventDefault();
      const camposAtualizados = inputsReact.map((input) => ({...input, value : ''}))
      const camposEnderecoAtualizados = buscarFornecedorReact.map((input) => ({...input, value : ''}))
      setInputReact(camposAtualizados)
      setInputbuscarFornecedorReact(camposEnderecoAtualizados)

    }

    const excluirCamposReact = (e) => {
      e.preventDefault();
      const excluirCampos = inputsReact.map((input) => ({...input, valid: input.value !== ''}))
      const camposEnderecoAtualizados = buscarFornecedorReact.map((input) => ({...input, value : ''}))
      setInputReact(excluirCampos)
      setInputbuscarFornecedorReact(camposEnderecoAtualizados)

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