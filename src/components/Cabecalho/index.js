const Cabecalho = () => {
  return (
    <header className="Cabecalho">
      <div className="cabecalhoTitulo">
        <img
          src="/img/fornecedor.svg"
          alt="Ícone Fornecedor"
          className="icones"
        />
        <h1>Fornecedor</h1>
      </div>
      <div>
        <img
          src="/img/fornecedor_adicionar.svg"
          alt="Adicionar Fornecedor"
          className="iconesMenuCabecalho"
        />
        <img
          src="/img/fornecedor_editar.svg"
          alt="Editar Fornecedor"
          className="iconesMenuCabecalho"
        />
        <img
          src="/img/fornecedor_excluir.svg"
          alt="Excluir Fornecedor"
          className="iconesMenuCabecalho"
        />
      </div>
    </header>
  );
};

export default Cabecalho;
