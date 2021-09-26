import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import MenuPrincipal from "../../components/MenuPrincipal";
import { Fornecedor } from '../fornecedor'
import { Usuario } from '../usuario'

export const Sistema = () => {
    const { path } = useRouteMatch();
    
    return (
        <main>
            <MenuPrincipal/>
                <Switch>
                    <Route path={`${path}/fornecedor`} >
                        <Fornecedor />
                    </Route>
                    <Route path={`${path}/usuario`} >
                        <Usuario />
                    </Route>
                </Switch>
        </main>
    )
}
