import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { Sistema } from './pages/sistema';
import { Login } from './pages/login';
import "./icones/css/Glyphter.css";
import "./style.css";

const App = () => {
   
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/sistema">
            <Sistema />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
