/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Login({ label, placeholder, saveUser }) {
  const [currentUser, setCurrentUser] = React.useState("");

  function setUser(event) {
    event.preventDefault();
    saveUser(currentUser);
    setCurrentUser("");
  }

  function onChangeInputUser(event) {
    setCurrentUser(event.currentTarget.user);
  }
  return (
    <div>
      <div>
        <form onsubmit={setUser}>
          <label htmlFor="user">{label}</label>
          <input
            id="user"
            required="required"
            autocomplete="off"
            user="user"
            placeholder={placeholder}
            onChange={onChangeInputUser}
            value={currentUser}
          />
          {/* <input
           id="email"
           required="required"
           autocomplete="off"
           emailUser="email"
           placeholder={placeholder}
           
           
          
          /> */}
          <button>OK</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
