//import Botoes from "../../../components/Botoes";
import { inputs, inputsEndereco, buscarFornecedor } from "./model";
import { useState } from "react";

const ConsultarFornecedor = () => {

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

  const renderizarCamposEndereco = () =>
    inputsEndereco.map((inputEnderecoAtual) => (
      <div className="itemFormulario">
        <label for={inputEnderecoAtual.name}>{inputEnderecoAtual.label}:</label>
        <br />
        <input
          placeholder={inputEnderecoAtual.placeholder}
          name={inputEnderecoAtual.name}
          id={inputEnderecoAtual.id}
          type={inputEnderecoAtual.type}
          required={inputEnderecoAtual.required}
        />
      </div>
    ));

  const limparCampos = (e) => {
    //e.preventDefault();

    inputs.map((input) => {
      document.getElementById(input.id).value = "";
    });

    inputsEndereco.map((input) => {
      document.getElementById(input.id).value = "";
    });
  };

    const listarFornecedores = () => {

        const BuscarFornecedor = document.querySelector("#BuscarFornecedor");

        if (document.querySelector("#BuscarFornecedor")) {
            let i, L = BuscarFornecedor.options.length - 1;
            for (i = L; i >= 0; i--) {
                BuscarFornecedor.remove(i);
            }
        }

        if (BuscarFornecedor) {
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
                        document.querySelector("#BuscarFornecedor").appendChild(opt);
                    }
                });
        }
    };

  const confirmarCampos = (e) => {
    //e.preventDefault();

    inputs.map((input) => {
      const htmlInputs = document.getElementById(input.id);
      if (htmlInputs.value != "") {
        alert("Item Cadastrado com sucesso");
      } else {
        htmlInputs.style = "border: 1px solid red";
      }
    });

    inputsEndereco.map((input) => {
      const htmlInputsEndereco = document.getElementById(input.id);
      if (htmlInputsEndereco.value != "") {
        alert("Item Cadastrado com sucesso");
      } else {
        htmlInputsEndereco.style = "border: 1px solid red";
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
          className={inputAtual.classe}
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

  const renderizarCamposEnderecoReact = () =>
    inputsEndereco.map((inputEnderecoAtual) => (
      <div className="itemFormulario">
        <label for={inputEnderecoAtual.name}>{inputEnderecoAtual.label}:</label>
        <br />
        <input
          placeholder={inputEnderecoAtual.placeholder}
          name={inputEnderecoAtual.name}
          id={inputEnderecoAtual.id}
          type={inputEnderecoAtual.type}
          required={inputEnderecoAtual.required}
          value={inputEnderecoAtual.value}
          disabled={inputEnderecoAtual.disabled}
          className={inputEnderecoAtual.classe}
          onChange={(e) => mudarValueInputEndereco(e, inputEnderecoAtual)}

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
            className={BuscarFornecedorAtual.classe}
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
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposBuscarFornecedorReact()}
      </fieldset>
      <fieldset>
        {/*renderizarCampos()*/}
        {renderizarCamposReact()}
        {listarFornecedores()}
      </fieldset>
      <h3>
        <span>Endereço</span>
      </h3>
      <fieldset>
        {renderizarCamposEnderecoReact()}
        {/*renderizarCamposEndereco()*/}
      </fieldset>
      {/* <Botoes botoes={botoes} /> */}
    </div>
  );
};

export default ConsultarFornecedor;
