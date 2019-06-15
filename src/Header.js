/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Router, Link } from "@reach/router";

import LocalStorage from "./helpers/Localstorage";

function Header() {
  const LinkStyle = {
    textDecoration: "none",
    color: "#FFFFFF"
  };

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
      (LocalStorage.existUser() &&{" "}
      <div
        className="menu"
        css={{
          position: "relative",
          paddingRight: 20,
          display: "inline-block"
        }}
      >
        <button
          id="dropbtn"
          type="button"
          onclick="myFunction()"
          css={{
            background: "center/99% url('../assets/avatar.jpg') no-repeat",
            margin: 0,
            padding: 0,
            border: "none",
            borderRadius: "50%",
            width: 30,
            height: 30
          }}
        />
        <div
          id="myDropdown"
          class="dropdown"
          css={{
            display: "none",
            position: "absolute",
            backgroundColor: "#ffffff",
            border: "1px solid #999999",
            top: 43,
            right: 0,
            boxShadow: "0px 8px 16px 0px rgba(0, 0, 0, 0.2)",
            zIndex: 1
          }}
        >
          <a
            css={{
              textDecoration: "none",
              color: "#333333",
              borderTop: "1px solid #999999",
              padding: 10,
              display: "block"
            }}
          >
            {LocalStorage.existUser()}
          </a>
          <a
            css={{
              textDecoration: "none",
              color: "#333333",
              borderTop: "1px solid #999999",
              padding: 10,
              display: "block"
            }}
            onclick={LocalStorage.deleteUser()}
          >
            Logout
          </a>
        </div>
      </div>
      )
    </header>
  );
}

export default Header;
