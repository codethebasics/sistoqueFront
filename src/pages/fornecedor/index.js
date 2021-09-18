import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import Cabecalho from "../../components/Cabecalho";
import CadastroFornecedor from './CadastroFornecedor';
export const Fornecedor = () => {
    const { path } = useRouteMatch();
    const links = [
        {
            src: "/img/fornecedor_editar.svg",
            alt: "Editar Fornecedor",
            to: `${path}/editar`,
            active: window.location.pathname === `${path}/editar`,
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
                    <div>
                        <h1>Hello</h1>
                    </div>
                </Route>
                <Route path={`${path}/cadastro`}>
                    <CadastroFornecedor />
                </Route>
                <Route path={`${path}/editar`}>
                    <CadastroFornecedor />
                </Route>
            </Switch>
        </div>
    )
}
