import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import MenuPrincipal from "./components/MenuPrincipal";
import { Fornecedor } from './pages/fornecedor'
import "./style.css";

const App = () => {
   
  return (
    <BrowserRouter>
      <main>
        <MenuPrincipal/>
        <Switch>
          <Route path="/fornecedor">
            <Fornecedor />
          </Route>
        </Switch>
        
      </main>
    </BrowserRouter>
    
    
  );
};

export default App;
