import { React } from "react";
import { BrowserRouter as Router,Switch,Route,Redirect } from 'react-router-dom';
import {Header} from './components/ui/Header';
import {EstadoView} from './components/estados/EstadoView';
import {InventarioView} from './components/inventarios/InventarioView';
import {MarcaView} from './components/marcas/MarcaView';
import {TipoEquipoView} from './components/tipos/TipoEquipoView';
import {UsuarioView} from './components/usuarios/UsuarioView';
import {InventarioUpdate} from './components/inventarios/InventarioUpdate';
import {TipoEquipoUpdate} from './components/tipos/TipoEquipoUpdate';

const App = () => {
    return <Router>
        < Header/>
        <Switch>
            <Route exact path= '/' component={InventarioView} />
            <Route exact path='/usuarios' component={UsuarioView}/>
            <Route exact path='/marcas' component={MarcaView}/>
            <Route exact path='/estados' component={EstadoView} />
            <Route exact path='/tipos' component={TipoEquipoView}/>
            <Route exact path='/tipoEquipos/edit/:tipoEquipoid' component={TipoEquipoUpdate} />
            <Route extat path='/inventarios/edit/:inventarioId' component={InventarioUpdate} />
            <Redirect to='/'/>
        </Switch>
 </Router>

}

export {
    App
}