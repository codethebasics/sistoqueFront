export const inputs = [
    {
      name: "nome",
      id: "nome",
      label: "Nome Completo",
      placeholder: "Digite seu nome Completo",
      value: "",
      type: "text",
      required: true,
      classe: "input_tamanho5",
      valid : true,
      disabled : false,
    },
    {
      name: "cargo",
      id: "cargo",
      label: "Cargo",
      placeholder: "Digite o Cargo",
      value: "",
      type: "select",
      required: true,
      classe: "input_tamanho3",
      valid : true,
      disabled : false,
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

];

  export const buscarUsuario = [
    {
      name: "BuscarUsuario",
      id: "BuscarUsuario",
      label: "Selecione um Usuario",
      placeholder: "Selecione um Usuario",
      value: "",
      required: true,
      classe: "input_tamanho1",
      valid : true,
      disabled : false,

    },
  ];