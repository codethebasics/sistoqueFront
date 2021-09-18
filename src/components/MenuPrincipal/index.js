const MenuPrincipal = () => {
  return (
    <div id="menu">
      <div>
        <figure className="logotipo"><img src='/img/logo1.png' alt='Logotipo Kokimbos'/></figure>
        <nav><ul>
          <li>
            Usuário
          </li>
          <li>
            Produto
          </li>
          <li>
            Estoque
          </li>
          <li>
            Receita
          </li>
          <li>
            Fornecedores
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
