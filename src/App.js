import React, {Component} from 'react';  
import  {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './components/Home';
import Header from './components/Header';
import './global.css';
import AddProduto from './pages/AddProduto';
import Carrinho from './pages/AddProduto/Carrinho/index';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path='/AddProduto' element={<AddProduto/>} />
     


      </Routes>
      </BrowserRouter>

    );
  }
}



export default App;
