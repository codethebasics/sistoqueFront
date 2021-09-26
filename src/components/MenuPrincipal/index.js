import { Link } from 'react-router-dom'
const MenuPrincipal = () => {
  return (
    <div id="menu">
      <div>
        <figure className="logotipo"><img src='/img/logo1.png' alt='Logotipo Kokimbos'/></figure>
        <nav>
          <ul>
            <li>
            <Link to="/sistema/usuario/PaginaInicial">
            <span class="icon-Usuario">Usuário</span>
            </Link>
            </li>
            <li>
            <Link to="/sistema/produto/PaginaInicial">
            <span class="icon-Produto">Produto</span>
            </Link>
              
            </li>
            <li>
            <Link to="/sistema/estoque/PaginaInicial">
            <span class="icon-Estoque">Estoque</span>
            </Link>
            </li>
            <li>
            <Link to="/sistema/receitas/PaginaInicial">
            <span class="icon-Receitas">Receita</span>
            </Link>
            </li>
            <li>
              <Link to="/sistema/fornecedor/PaginaInicial">
              <span class="icon-Fornecedor">Fornecedores</span>
              </Link>
            </li>
            <li>
            <Link to="/sistema/relatorios/PaginaInicial">
            <span class="icon-Relatorios">Relatório</span>
            </Link>
            </li>
        </ul>
        </nav>
      </div>

      <ul className="menuSair">
        <li>
          <Link to="/sistema/login">
          <span class="icon-sair">Sair</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuPrincipal;
