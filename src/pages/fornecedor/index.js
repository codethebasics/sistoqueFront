import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import Cabecalho from "../../components/Cabecalho";
import CadastroFornecedor from './CadastroFornecedor';
import EditarFornecedor from './EditarFornecedor';
import ExcluirFornecedor from './ExcluirFornecedor';
export const Fornecedor = () => {
    const { path } = useRouteMatch();
    const links = [
        {
            to: `${path}/fornecedor`,
            active: window.location.pathname === `${path}/fornecedor`,
        },
    ]

    return (
        <div>
            <Cabecalho 
                nomeCabecalho="Fornecedor"
                links={links}
            />

            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/cadastro`}>
                    <CadastroFornecedor />
                </Route>
                <Route path={`${path}/editar`}>
                    <EditarFornecedor />
                </Route>
                <Route path={`${path}/excluir`}>
                    <ExcluirFornecedor />
                </Route>
            </Switch>
        </div>
    )
}
