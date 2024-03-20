
import './App.css';
import { Route, Routes } from 'react-router-dom'
import ListaProductos from './components/ListaProductos';
import React from 'react'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/productos' element={<ListaProductos />} />
      </Routes>
    </div>
  );
}

export default App;
