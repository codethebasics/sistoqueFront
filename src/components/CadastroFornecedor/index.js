const CadastroFornecedor = () => {
  const inputs = [
    {
      name: "razaoSocial",
      id: "razaoSocial",
      label: "Razão Social",
      placeholder: "Razão Social",
      value: "",
      type: "text",
      required: true,
      tamanho: 120,
    },
    {
      name: "nomeFantasia",
      id: "nomeFantasia",
      label: "Nome Fantasia",
      placeholder: "Nome Fantasia",
      value: "",
      type: "text",
      required: true,
      tamanho: 56,
    },
    {
      name: "CNPJ",
      id: "CNPJ",
      label: "CNPJ",
      placeholder: "CNPJ",
      value: "",
      type: "text",
      required: true,
      tamanho: 56,
    },
    {
      name: "telefone",
      id: "telefone",
      label: "Telefone",
      placeholder: "Telefone",
      value: "",
      type: "tel",
      required: false,
      tamanho: 34,
    },
    {
      name: "celular",
      id: "celular",
      label: "Celular",
      placeholder: "Celular",
      value: "",
      type: "tel",
      required: false,
      tamanho: 34,
    },
    {
      name: "site",
      id: "site",
      label: "Site",
      placeholder: "Site",
      value: "",
      type: "url",
      required: false,
      tamanho: 34,
    },
    {
      name: "representante",
      id: "representante",
      label: "Representante",
      placeholder: "Representante",
      value: "",
      type: "text",
      required: false,
      tamanho: 34,

    },
    {
      name: "celularRepresentante",
      id: "celularRepresentante",
      label: "Celular Representante",
      placeholder: "Celular Representante",
      value: "",
      type: "tel",
      required: false,
      tamanho: 34,

    },
    {
      name: "emailRepresentante",
      id: "emailRepresentante",
      label: "Email Representante",
      placeholder: "Email Representante",
      value: "",
      type: "email",
      required: true,
      tamanho: 34,

    },];

    const inputsEndereco = [
    {
      name: "CEP",
      id: "CEP",
      label: "CEP",
      placeholder: "CEP",
      value: "",
      type: "text",
      required: true,
      tamanho: 20,

    },
    {
      name: "nomeLogradouro",
      id: "nomeLogradouro",
      label: "Nome da Rua / Avenida",
      placeholder: "Nome da Rua / Avenida",
      value: "",
      type: "text",
      required: true,
      tamanho: 62,

    },
    {
      name: "numero",
      id: "numero",
      label: "Número",
      placeholder: "Número",
      value: "",
      type: "text",
      required: true,
      tamanho: 20,

    },
    {
      name: "complemento",
      id: "complemento",
      label: "Complemento",
      placeholder: "Complemento",
      value: "",
      type: "text",
      required: true,
      tamanho: 23,

    },
    {
      name: "bairro",
      id: "bairro",
      label: "Bairro",
      placeholder: "Bairro",
      value: "",
      type: "text",
      required: true,
      tamanho: 23,

    },
    {
      name: "cidade",
      id: "cidade",
      label: "Cidade",
      placeholder: "Cidade",
      value: "",
      type: "text",
      required: true,
      tamanho: 24,

    },
    {
      name: "estado",
      id: "estado",
      label: "Estado",
      placeholder: "Estado",
      value: "",
      type: "text",
      required: true,
      tamanho: 24,

    },
  ];

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
    </div>
  );
};

export default CadastroFornecedor;
