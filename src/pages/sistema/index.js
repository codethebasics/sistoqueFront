import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import MenuPrincipal from "../../components/MenuPrincipal";
import { Fornecedor } from '../fornecedor'

export const Sistema = () => {
    const { path } = useRouteMatch();
    
    return (
        <main>
            <MenuPrincipal/>
                <Switch>
                    <Route path={`${path}/fornecedor`} >
                        <Fornecedor />
                    </Route>
                </Switch>
        </main>
    )
}
