/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import LocalStorage from "./helpers/Localstorage";
import { useUser } from "./contexts/user";

const styles = {
  boxShadow: "2px 4px 24px 0 rgba(0, 0, 0, 0.15)"
};
function Login({ placeholder }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const { setUser } = useUser();

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
    LocalStorage.saveUser({ username, email });
    setUser({ username, email });
  }

  return (
    <>
      {/* <Header /> */}
      <article
        css={{
          height: "calc(100vh - (50px + 65px))",
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          justifyContent: "center"
        }}
      >
        <section css={{ margin: "0 auto" }}>
          <form
            onSubmit={handleSubmit}
            css={{
              ...styles,
              backgroundColor: "#fff",

              padding: "40px",
              borderRadius: "8px",
              color: "#000",
              fontSize: "18px"
            }}
          >
            <fieldset css={{ border: "none" }}>
              <label htmlFor="user">Username</label>
              <br />
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
            </fieldset>
            <fieldset css={{ border: "none" }}>
              <label htmlFor="email">Email</label>
              <br />
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
            </fieldset>
            <button
              css={{
                ...styles,
                display: "block",
                margin: "20px auto 0",
                backgroundColor: "#673ab7",
                color: "#FFFFFF",
                border: "none",
                borderRadius: 5,
                padding: "10px 20px",
                fontWeight: "bold"
              }}
              type="submit"
            >
              Login
            </button>
          </form>
        </section>
      </article>
      {/* <Footer /> */}
    </>
  );
}

export default Login;
