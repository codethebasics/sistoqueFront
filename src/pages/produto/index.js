import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch,
} from 'react-router-dom'
import Cabecalho from "../../components/Cabecalho";
import PaginaInicial from './PaginaInicial';
import CadastroProduto from './CadastroProduto';
import EditarProduto from './EditarProduto';
import ExcluirProduto from './ExcluirProduto';
export const Produto = () => {
    const { path } = useRouteMatch();
    const links = [
        {
            to: `${path}/paginaInicial`,
            active: window.location.pathname === `${path}/paginaInicial`,
            iconName: '_paginaInicial'
        },
        {
            to: `${path}/cadastro`,
            active: window.location.pathname === `${path}/cadastro`,
            iconName: '_adicionar'
        },
        {
            to: `${path}/editar`,
            active: window.location.pathname === `${path}/editar`,
            iconName: '_editar'
        },
        {
            to: `${path}/excluir`,
            active: window.location.pathname === `${path}/excluir`,
            iconName: '_excluir'

        },
        
    ]

    const listarCategorias = () => {

        const categoria = document.querySelector("#categoria");

        if (categoria) {
            let i, L = categoria.options.length - 1;
            for(i = L; i >= 0; i--) {
                categoria.remove(i);
            }
        }

        fetch('http://localhost:4000/categories', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < data.length; i++) {
                    let opt = document.createElement('option');
                    opt.value = data[i].id;
                    opt.innerHTML = data[i].nome;
                    if (categoria)
                        document.querySelector("#categoria").appendChild(opt);
                }
            });
    };

    return (
        <div>
            <Cabecalho
                nomeCabecalho="Produto"
                links={links}
            />

            <Switch>
                <Route exact path={`${path}/paginaInicial`}>
                    <PaginaInicial />
                </Route>
                <Route path={`${path}/cadastro`}>
                    <CadastroProduto />
                </Route>
                <Route path={`${path}/editar`}>
                    <EditarProduto />
                </Route>
                <Route path={`${path}/excluir`}>
                    <ExcluirProduto />
                </Route>
            </Switch>
        </div>
    )
}
