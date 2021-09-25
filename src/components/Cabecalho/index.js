import { Link } from "react-router-dom";
const Cabecalho = ({
  nomeCabecalho,
  links = []
}) => {
  return (
    <header className="Cabecalho">
      <div className="cabecalhoTitulo">
      <span className="iconTitulo-fornecedor"></span><h1>{nomeCabecalho}</h1>
      </div>
      <div>
        {
          links.map((link) => (
            <Link to={link.to}>
              <span className="iconTituloInteracoes-fornecedor_adicionar"></span>
            </Link>
          ))
        }
        {
          links.map((link) => (
            <Link to={link.to}>
              <span className="iconTituloInteracoes-fornecedor_editar"></span>
            </Link>
          ))
        }
        {
          links.map((link) => (
            <Link to={link.to}>
              <span className="iconTituloInteracoes-fornecedor_excluir"></span>
            </Link>
          ))
        }
      </div>
    </header>
  );
};

export default Cabecalho;
