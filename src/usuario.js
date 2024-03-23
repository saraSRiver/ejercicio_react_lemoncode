import React, { useRef } from "react";
import { Link } from "react-router-dom";

const UserPage = ({member}) => {

  
    return (
        <> 
          {member && member.map((member) => (
            <>
            <div className="user-container" key={member.id}>
              <img src={member.avatar_url} />
              <span>{member.id}</span>
              <Link to={`/detail/${member.login}`}>{member.login}</Link>
              </div>
            </>
          ))}
        
        </>
        );
}

export default UserPage