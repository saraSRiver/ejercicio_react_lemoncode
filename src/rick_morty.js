import React from "react";
import { Link, json } from "react-router-dom";


const characterMock = [
    {
      id: Number, 
      name: String,
      image: String,
      status: String, 
      species: String
    }
]

 const CharacterPage = () => {
    const [characters, setCharacters] = React.useState(characterMock);
    

React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character`)
      .then((response) =>  response.json())
      .then((json) => setCharacters(json.results))
  }, []);

  return (
    <>
      <h2>Lista de personajes de 'Rick y Morty'</h2>
      <div className="list-container">
        <span className="list-header">Imagen</span>
        <span className="list-header">Id</span>
        <span className="list-header">Nombre</span>
        {characters.map((character) => (
          <>
          <div className="user-container"  key={character.id}>
            <img src={character.image} />
            <span>{character.id}</span>
            <Link to={`/detalle_rick_morty/${character.species}/${character.name}`}>{character.name} </Link> 
          </div>
          </>))}
          <div className="buttons_detail">
            <Link className="detail" to="/">Lista de usuarios</Link>
          </div>
      </div>
    </>
  );
};
export default CharacterPage