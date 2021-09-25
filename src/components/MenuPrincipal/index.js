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
            <span class="icon-usuario">Usuário</span>
            </Link>
            </li>
            <li>
            <Link to="/sistema/produto/PaginaInicial">
            <span class="icon-produto">Produto</span>
            </Link>
              
            </li>
            <li>
            <Link to="/sistema/estoque/PaginaInicial">
            <span class="icon-estoque">Estoque</span>
            </Link>
            </li>
            <li>
            <Link to="/sistema/receitas/PaginaInicial">
            <span class="icon-receitas">Receita</span>
            </Link>
            </li>
            <li>
              <Link to="/sistema/fornecedor/PaginaInicial">
              <span class="icon-fornecedor">Fornecedores</span>
              </Link>
            </li>
            <li>
            <Link to="/sistema/relatorios/PaginaInicial">
            <span class="icon-relatorios">Relatório</span>
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
