import { Link } from "react-router-dom";
const Cabecalho = ({
  nomeCabecalho,
  links = []
}) => {
  return (
    <header className="Cabecalho">
      
        {links.map((link) => (
          <Link to={link.to}>
          <div className="cabecalhoTitulo">
          <span className={"iconTitulo-" + nomeCabecalho}></span><h1>{nomeCabecalho}</h1>
          
          </div>
          </Link>
        ))}
      
      <div>
        {
          links.map((link) => (
            <Link to={link.to}>
              <span 
              className={"iconTituloInteracoes-" + nomeCabecalho + "_adicionar"}
              ></span>
            </Link>
          ))
        }
        {
          links.map((link) => (
            <Link to={link.to}>
              <span className={"iconTituloInteracoes-" + nomeCabecalho + "_editar"}></span>
            </Link>
          ))
        }
        {
          links.map((link) => (
            <Link to={link.to}>
              <span className={"iconTituloInteracoes-" + nomeCabecalho + "_excluir"}></span>
            </Link>
          ))
        }
      </div>
    </header>
  );
};

export default Cabecalho;
