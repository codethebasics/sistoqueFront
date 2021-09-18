const Botoes = ({
    botoes = []
}) => {
    return (
        <div className='botoes'>
            {botoes.map((botaoAtual) => (
                <button 
                    className={botaoAtual.classe}
                    {...botaoAtual}
                 >{botaoAtual.nome}</button>
            ))}
        </div>
    );
  };
  
  export default Botoes;