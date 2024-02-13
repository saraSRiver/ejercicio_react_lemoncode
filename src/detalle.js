import React from "react";
import { Link, useParams } from "react-router-dom";
import {ListPage} from "./lista_miembros";

const DetailPage = () => {
  const {login} = useParams();

  return (
    <>
      <h2>Vista en detalle del usuario</h2>
      <h3>Login: {login}</h3>
      <Link className="detail" to="/lista_miembros" >Vista predeterminada</Link>
    </>
  );
};

export default DetailPage