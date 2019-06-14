/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

const styles = {
  boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)"
};
function Login({ placeholder, saveUser }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");

  // function setUser(event) {
  //   event.preventDefault();
  //   saveUser(currentUser);
  //   setCurrentUser("");

  // }

  function onChangeInputUser(event) {
    setUsername(event.target.value);
  }

  function onChangeInputEmail(event) {
    setEmail(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
    console.log(email);
  }

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
          onSubmit={handleSubmit}
          css={{
            ...styles,
            backgroundColor: "#fff",
            width: "100%",
            padding: "24px",
            borderRadius: "8px",
            color: "#000",
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
          <input
            css={{ ...styles }}
            id="user"
            required="required"
            autoComplete="off"
            user="user"
            placeholder={placeholder}
            onChange={onChangeInputUser}
            value={username}
          />
          <br />
          <label>Email</label>
          <input
            css={{ ...styles }}
            id="email"
            required="required"
            autoComplete="off"
            type="email"
            placeholder={placeholder}
            onChange={onChangeInputEmail}
            value={email}
          />
          <br />
          <button
            css={{ ...styles, marginTop: 30, alignSelf: "flex-end" }}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
