const MenuPrincipal = () => {
  return (
    <div id="menu">
      <div>
        <figure className="logotipo"><img src='/img/logo1.png' alt='Logotipo Kokimbos'/></figure>
        <ul>
          <li>
            <i></i>Usuário
          </li>
          <li>
            <i></i>Produto
          </li>
          <li>
            <i></i>Estoque
          </li>
          <li>
            <i></i>Receita
          </li>
          <li>
            <i></i>Fornecedores
          </li>
          <li>
            <i></i>Relatório
          </li>
        </ul>
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
