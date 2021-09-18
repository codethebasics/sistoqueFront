import { Link } from 'react-router-dom'
const MenuPrincipal = () => {
  return (
    <div id="menu">
      <div>
        <figure className="logotipo"><img src='/img/logo1.png' alt='Logotipo Kokimbos'/></figure>
        <nav>
          <ul>
            <li>
              Usuário
            </li>
            <li>
            <Link to="/produto/cadastro">
              Produto
            </Link>
              
            </li>
            <li>
              Estoque
            </li>
            <li>
              Receita
            </li>
            <li>
              <Link to="/fornecedor/cadastro">
                Fornecedores
              </Link>
            </li>
            <li>
            Relatório
            </li>
        </ul>
        </nav>
      </div>

      <ul className="menuSair">
        <li>
          <i></i>Sair
        </li>
      </ul>
    </div>
  );
};

export default MenuPrincipal;
