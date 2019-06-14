/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Login({ label, placeholder, saveUser, emailUser }) {
  const [currentUser, setCurrentUser] = React.useState("");
  // const [currentEmailUser, setEmailUser] = React.useState("");

  function setUser(event) {
    event.preventDefault();
    saveUser(currentUser);
    setCurrentUser("");
  }

  function onChangeInputUser(event) {
    setCurrentUser(event.currentTarget.user);
  }
  // function setEmailUser(event) {
  //   event.preventDefault();
  //   emailUser(emailUser);
  //   setemailUser("");
  // }

  // function onChangeInputEmailUser(event) {
  //   setemailUser(event.currentTarget.emailuser);
  // }
  return (
    <div
      css={{
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
    >
      <div css={{ width: "100%" }}>
        <form
          onSubmit={setUser}
          css={{
            backgroundColor: "#fff",
            width: "100%",
            padding: "24px",
            borderRadius: "8px",
            color: "#000",
            boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)",
            boxSizing: "border-box",
            fontSize: "18px",
            margin: "auto",
            maxWidth: 400
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "flex-start"
          }}
        >
          <label
            css={{
              margin: 0,
              fontWeight: "500",
              textAlign: "center",
              justifyContent: "center"
            }}
          />
          <label> User</label>
          {/* const boxShadow={"2px 4px 24px 0 rgba(0, 0, 0, 0.15)"} */}
          <input
            css={{ boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)" }}
            id="user"
            required="required"
            autocomplete="off"
            user="user"
            placeholder={placeholder}
            onChange={onChangeInputUser}
            value={currentUser}
          />
          <br />
          <label>Email</label>
          <input
            css={{ boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)" }}
            id="email"
            required="required"
            autocomplete="off"
            emailUser="email"
            placeholder={placeholder}
          />
          <br />
          <button css={{ marginTop: 30, alignSelf: "flex-end"  }} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
//  puedo hacer const de css dentro del componente 
// email user show logic
//