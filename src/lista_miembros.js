import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useDebounce } from 'use-debounce';
import { UserContext } from "./App";
import UserPage from "./usuario";

const membersMock = [
    {
        login: "",
        id: "", 
        avatar_url: ""
    }
]

 const ListPage = () => {
   
    let [orgs, setOrgs] = React.useState();
    const inputRef = useRef(); 
    const [members, setMembers] = React.useState(membersMock);
    const {orgInput, setOrgInput}  = useContext(UserContext);
    const [debouncedMember]= useDebounce(orgInput, 2000);
    
React.useEffect(() => {
  
    if(orgInput) { 
    
    fetch(`https://api.github.com/orgs/${orgInput}/members`)
      .then((response) => {
        if(response.ok) {
          return response.json()

        } else {

          throw new Error("not found")
        } })
      .then((json) => setMembers(json))
      .catch((error) => console.log(error))
      if(orgInput != undefined) {
        inputRef.current.value = orgInput;
      }
    }
  }, [debouncedMember]);

  React.useEffect(() => {
  
    if(orgs) { 
    
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
        inputRef.current.value = orgs;
      }
    }
  }, [orgs]);
  

  return (
    <>
      <h2>Lista de usuarios</h2>
        <input value={orgInput} ref={inputRef} onChange={(e) => setOrgInput(e.target.value)} ></input>
        <button onClick={(e) => setOrgs(inputRef.current.value) }>Búsqueda de usuarios</button>
        <div className="list-container">
          <span className="list-header">Avatar</span>
          <span className="list-header">Id</span>
          <span className="list-header">Nombre</span>
          <UserPage member= {members}></UserPage>
        </div>
        <div className="buttons_detail">
          <Link className="detail" to="/rick_morty">Personajes de Rick y Morty</Link>
        </div>
    </>
  );
};
export default ListPage