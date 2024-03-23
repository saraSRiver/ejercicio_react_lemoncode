import React from "react";
import { Link, useParams } from "react-router-dom";

const DetailPage = () => {
  const {login} = useParams();

  return (
    <>
      <h2>Vista en detalle del usuario</h2>
      <h3>Login: {login}</h3>
      <Link className="detail" to="/" >Vista predeterminada</Link>
    </>
  );
};

export default DetailPage