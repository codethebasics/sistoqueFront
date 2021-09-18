import "./style.css";
import MenuPrincipal from "./components/MenuPrincipal";
import CadastroFornecedor from "./components/CadastroFornecedor";
import Cabecalho from "./components/Cabecalho";
import Botoes from "./components/Botoes";



const App = () => {
  return (
   
    <main>
    <MenuPrincipal/>
    <div>
    <Cabecalho/>
    <CadastroFornecedor/>
    <Botoes/>
    </div>
    </main>
    
  );
};

export default App;
