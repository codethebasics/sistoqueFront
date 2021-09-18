const Botoes = () => {
    const botoes = [{
        nome:"Cadastrar",
        classe:"botaoCadastrar",
    },
    {
        nome:"Limpar",
        classe:"botaoLimpar",
    },
    {
        nome:"Excluir",
        classe:"botaoExcluir",
    },];

    return (
        <div className='botoes'>
        {botoes.map((botaoAtual) => (
                <button className={botaoAtual.classe}>{botaoAtual.nome}</button>
        ))}
        </div>
    );
  };
  
  export default Botoes;