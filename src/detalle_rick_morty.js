import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailCharacterPage = () => {
  const {species} = useParams();
  const {name} = useParams();
 
  return (
    <>
      <h2>Vista en detalle del personaje</h2>
      <h3>Especie: {species}</h3>
      <h3>Especie: {name}</h3>
      <Link className="detail" to="/rick_morty">Vista predeterminada</Link>
    </>
  );
};

export default DetailCharacterPage