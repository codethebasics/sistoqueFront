import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import Cabecalho from "../../components/Cabecalho";
import CadastroUsuario from './CadastroUsuario';
import EditarUsuario from './EditarUsuario';
import ExcluirUsuario from './ExcluirUsuario';
export const Usuario = () => {
    const { path } = useRouteMatch();
    const links = [
        {
            to: `${path}/usuario`,
            active: window.location.pathname === `${path}/usuario`,
        },
    ]

    return (
        <div>
            <Cabecalho 
                nomeCabecalho="Usuario"
                links={links}
            />

            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/cadastro`}>
                    <CadastroUsuario />
                </Route>
                <Route path={`${path}/editar`}>
                    <EditarUsuario />
                </Route>
                <Route path={`${path}/excluir`}>
                    <ExcluirUsuario />
                </Route>
            </Switch>
        </div>
    )
}