import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'
import { Sistema } from './pages/sistema'
import "./style.css";

const App = () => {
   
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/sistema">
            <Sistema />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
