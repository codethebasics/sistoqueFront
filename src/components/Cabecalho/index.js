import { Link } from "react-router-dom";
const Cabecalho = ({
  nomeCabecalho,
  links = []
}) => {

  console.log({ links })
  return (
    <header className="Cabecalho">
      
        
          <div className="cabecalhoTitulo">
            <span className={"iconTitulo-" + nomeCabecalho}></span>
            <h1>{nomeCabecalho}</h1>
          </div>
      <div>
        {
          links.map((link) => (
            <Link to={link.to}>
              <span 
              className={"iconTituloInteracoes-" + nomeCabecalho + link.iconName}
              style={{
                color: link.active ? 'var(--corVerde)' : 'var(--corLaranja)'
              }}
              ></span>
            </Link>
          ))
        }
      </div>
    </header>
  );
};

export default Cabecalho;
