import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import Cabecalho from "../../components/Cabecalho";
import ConsultarUsuario from './PaginaInicial';
import CadastroUsuario from './CadastroUsuario';
import EditarUsuario from './EditarUsuario';
import ExcluirUsuario from './ExcluirUsuario';
export const Usuario = () => {
    const { path } = useRouteMatch();
    const links = [
        {
            to: `${path}/cadastro`,
            active: window.location.pathname === `${path}/usuario`,
            iconName: '_adicionar'
        },
        {
            to: `${path}/editar`,
            active: window.location.pathname === `${path}/usuario`,
            iconName: '_editar'
        },
        {
            to: `${path}/excluir`,
            active: window.location.pathname === `${path}/usuario`,
            iconName: '_excluir'

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
                    <ConsultarUsuario />
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