/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router, Link } from "@reach/router";
import { useUser } from "./contexts/user";

import LocalStorage from "./helpers/Localstorage";

function Header() {
  const { setUser } = useUser();
  const LinkStyle = {
    textDecoration: "none",
    color: "#FFFFFF"
  };

  function logout() {
    setUser(null);
    LocalStorage.deleteUser();
  }

  return (
    <header
      css={{
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#673ab7",
        color: "#FFFFFF",
        alignItems: "center",
        boxShadow: "5px 0 5px #000000",
        height: 50,
        width: "100%"
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: 220
        }}
      >
        <button
          id="sidebarbtn"
          type="button"
          css={{
            border: "none",
            backgroundColor: "#673ab7",
            color: "#ffffff",
            fontSize: 20
          }}
        >
          &#9776;
        </button>
        <h1
          css={{
            margin: 0,
            padding: 0,
            fontSize: "2rem",
            fontWeight: "normal"
          }}
        >
          <Link to="/" css={{ ...LinkStyle }}>
            DSCUSSME
          </Link>
        </h1>
      </div>
      {LocalStorage.existUser() && (
        <div
          className="menu"
          css={{
            position: "relative",
            paddingRight: 20,
            display: "inline-block"
          }}
        >
          <button
            type="button"
            onClick={logout}
            css={{
              display: "block",
              backgroundColor: "#FFFFFF",
              color: "#673ab7",
              border: "none",
              borderRadius: 5,
              padding: "10px 20px",
              fontWeight: "bold",
              cursor: "pointer"
            }}
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
