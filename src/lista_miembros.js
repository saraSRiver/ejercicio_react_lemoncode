import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from 'use-debounce';


const membersMock = [
    {
        login: String,
        id: String, 
        avatar_url: String
    }
]

const orgMock = [
  {
    name: String
  }
]

 const ListPage = () => {
    const ORGANIZATION = "org"
    let org = "lemoncode"
    if(localStorage.getItem(ORGANIZATION)){
      org = localStorage.getItem(ORGANIZATION)
    }
    const [members, setMembers] = React.useState(membersMock);
    const [orgInput, setOrgInput] = React.useState(org)
    const [orgs, setOrgs] = React.useState();
    const inputRef = useRef(); 
    const debouncedMember= useDebounce(orgs, 200);

React.useEffect(() => { 
  
    fetch(`https://api.github.com/orgs/${orgs}/members`)
      .then((response) => {
        if(response.ok) {
          return response.json()

        } else {

          throw new Error("not found")
        } })
        
      .then((json) => setMembers(json))
      .catch((error) => console.log(error))
      if(orgs != undefined) {
      localStorage.setItem(ORGANIZATION, orgs);
      }
  }, [debouncedMember]);
  

  return (
    <>
      <h2>Lista de usuarios</h2>
      <input value={orgInput} ref={inputRef} onChange={(e) => setOrgInput(e.target.value)} ></input>
      <button onClick={(e) => setOrgs(inputRef.current.value) }>Búsqueda de usuarios</button>
        <div className="list-user-list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Nombre</span>
          {members.map((member) => (
            <>
              <img src={member.avatar_url} />
              <span key={member.id}>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
            </>
          ))}
        </div>
        <div className="buttons_detail">
          <Link className="detail" to="/rick_morty">Personajes de Rick y Morty</Link>
        </div>
    </>
  );
};
export default ListPage