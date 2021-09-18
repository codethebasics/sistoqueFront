import { Link } from "react-router-dom";
const Cabecalho = ({
  nomeCabecalho,
  links = []
}) => {
  return (
    <header className="Cabecalho">
      <div className="cabecalhoTitulo">
        <img
          src="/img/fornecedor.svg"
          alt="Ícone Fornecedor"
          className="icones"
        />
        <h1>{nomeCabecalho}</h1>
      </div>
      <div>
        {
          links.map((link) => (
            <Link to={link.to}>
              <img
                src={link.src}
                alt="Adicionar Fornecedor"
                className="iconesMenuCabecalho"
                style={link.active ? { 'background-color': 'red'} : {}}
              />
            </Link>
          ))
        }
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
