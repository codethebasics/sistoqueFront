import Botoes from "../../../components/Botoes";
import { inputs, inputsEndereco } from './model'
const CadastroFornecedor = () => {
 
  const botoes = [{
      nome:"Cadastrar",
      classe:"botaoCadastrar",
      onClick: () => alert("chamou 1"),
  },
  {
      nome:"Limpar",
      classe:"botaoLimpar",
      onClick: () => alert("chamou 2")
  },
  {
      nome:"Excluir",
      classe:"botaoExcluir",
      onClick: () => alert("chamou 3")
  },];


  return (
    <div className="Formulario">
    
    <h2>Cadastro novo Fornecedor</h2>
    <fieldset>
      {inputs.map((inputAtual) => (
        <div className="itemFormulario">
          <label for={inputAtual.name}>{inputAtual.label}:</label>
          <br />
          <input
            placeholder={inputAtual.placeholder}
            name={inputAtual.name}
            id={inputAtual.id}
            type={inputAtual.type}
            required={inputAtual.required}
            size={inputAtual.tamanho}
          />
        </div>
      ))}
    </fieldset>
    <h3><span>Endereço</span></h3>
    <fieldset>
      {inputsEndereco.map((inputEnderecoAtual) => (
        <div className="itemFormulario">
          <label for={inputEnderecoAtual.name}>{inputEnderecoAtual.label}:</label>
          <br />
          <input
            placeholder={inputEnderecoAtual.placeholder}
            name={inputEnderecoAtual.name}
            id={inputEnderecoAtual.id}
            type={inputEnderecoAtual.type}
            required={inputEnderecoAtual.required}
            size={inputEnderecoAtual.tamanho}
          />
        </div>
      ))}
    </fieldset>
    
      <Botoes botoes={botoes} />
    </div>
  );
};

export default CadastroFornecedor;
