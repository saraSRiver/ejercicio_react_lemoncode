import './App.css';
import React, { createContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  ListPage from "./lista_miembros";
import DetailPage from './detalle';
import CharacterPage from './rick_morty';
import DetailCharacterPage from './detalle_rick_morty';

export const UserContext = createContext();
export const App = () => {
  let org =  "lemoncode"

  const [orgInput, setOrgInput] = React.useState(org)
  return (
     <UserContext.Provider value={{orgInput, setOrgInput}}>
    <Router>
      <Routes>
        <Route path="/" element={< ListPage/>} />
        <Route path="/detail/:login" element={<DetailPage />} />
        <Route path="/rick_morty" element={<CharacterPage />} />
        <Route path="/detalle_rick_morty/:species/:name" element={<DetailCharacterPage />} />
      </Routes>
    </Router>
    </UserContext.Provider>
  );
};

export default App;
