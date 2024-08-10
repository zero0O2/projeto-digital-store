import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'

import Home from './pages/Home.jsx'
import Produtos from './pages/Produtos.jsx'
import Categorias from './pages/Categorias.jsx'
import MeusPedidos from './pages/MeusPedidos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/produtos" element={<Produtos />}/>
        <Route path="/categorias" element={<Categorias />}/>
        <Route path="/meus-pedidos" element={<MeusPedidos />}/>
      </Routes>
    </BrowserRouter>
    

)
