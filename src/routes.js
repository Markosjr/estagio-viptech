import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';


import Home from './components/Home';
import AddProduto from "./pages/AddProduto";
import Carrinho from "./pages/AddProduto/Carrinho";


function Routes () {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/AddProduto" component={AddProduto} />
                <Route path="/Carrinho" component={Carrinho} />
            </Switch>
        
        </BrowserRouter>

    );

};


export default Routes;