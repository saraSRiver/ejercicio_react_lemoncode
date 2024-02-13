import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  ListPage from "./lista_miembros";
import DetailPage from './detalle';
import CharacterPage from './rick_morty';
import DetailCharacterPage from './detalle_rick_morty';


export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/lista_miembros" element={< ListPage/>} />
        <Route path="/detail/:login" element={<DetailPage />} />
        <Route path="/rick_morty" element={<CharacterPage />} />
        <Route path="/detalle_rick_morty/:species/:name" element={<DetailCharacterPage />} />
      </Routes>
    </Router>
  );
};

export default App;
