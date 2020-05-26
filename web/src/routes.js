import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import PrivateRoute from './PrivateRoute/PrivateRoute';

import Home from './pages/Home';
import AdicionarImoveis from './pages/AdicionarImoveis';
import AdicionarFotos from './pages/AdicionarFotos';
import Login from './pages/Login';
import Imoveis from './pages/Imoveis';
import Profile from './pages/Profile';
import Cadastro from './pages/CadastroUsuario';
import AluguelCasa from './pages/AluguelCasa';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/imoveis" exact component={Imoveis}/>
                <Route path="/cadastroUser" exact component={Cadastro}/>
                <Route path="/login" exact component={Login}/>
                
                <PrivateRoute path="/profile" exact component={Profile}/>
                <PrivateRoute path="/adicionarImoveis" exact component={AdicionarImoveis}/>
                <PrivateRoute path="/fotos" exact component={AdicionarFotos}/>
                <PrivateRoute path="/aluguel" exact component={AluguelCasa}/>

            </Switch>
        </BrowserRouter>
    )
}