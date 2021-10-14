export const inputs = [
    {
      name: "nome",
      id: "nome",
      label: "Nome Completo",
      placeholder: "Digite seu nome Completo",
      value: "",
      type: "text",
      required: false,
      classe: "input_tamanho5",
      valid : true,
      disabled : true,
    },
    {
      name: "cargo",
      id: "cargo",
      label: "Cargo",
      placeholder: "Digite o Cargo",
      value: "",
      type: "select",
      required: false,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
      options: [
        {
          value: "-",
          text: "Selecione um cargo"
        },
        {
          value: "funcionario",
          text: "Funcionário"
        },
        {
          value: "cozinheiro",
          text: "Cozinheiro"
        },
        {
          value: "gestor",
          text: "Gestor"
        },
      ]
    },
    {
      name: "dataNascimento",
      id: "dataNascimento",
      label: "Data Nascimento",
      placeholder: "Data Nascimento",
      value: "",
      type: "date",
      required: false,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
    },
    {
      name: "CPF",
      id: "CPF",
      label: "CPF",
      placeholder: "CPF",
      value: "",
      type: "text",
      required: false,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
    },
    {
      name: "RG",
      id: "RG",
      label: "RG",
      placeholder: "RG",
      value: "",
      type: "text",
      required: false,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,
    },
    {
      name: "celular",
      id: "celular",
      label: "Celular",
      placeholder: "Celular",
      value: "",
      type: "tel",
      required: false,
      classe: "input_tamanho3",
      valid : true,
      disabled : true,    
    },];

export const inputsLogin = [
    {
      name: "login",
      id: "login",
      label: "Login",
      placeholder: "Login",
      value: "",
      type: "text",
      required: false,
      classe: "input_tamanho2",
      valid : true,
      disabled : true,

    },
    {
      name: "senha",
      id: "senha",
      label: "Senha",
      placeholder: "Senha",
      value: "",
      type: "password",
      required: false,
      classe: "input_tamanho2",
      valid : true,
      disabled : true,

    },
    
  ];

  export const buscarUsuario = [
    {
      name: "BuscarUsuario",
      id: "BuscarUsuario",
      label: "Selecione um Usuario",
      placeholder: "Selecione um Usuario",
      value: "",
      required: false,
      classe: "input_tamanho1",
      valid : true,
      disabled : true,

    },
  ];
