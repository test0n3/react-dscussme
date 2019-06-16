/** @jsx jsx */

import { jsx } from "@emotion/core";

function Footer() {
  const pStyle = {
    margin: 0,
    padding: "5px 0",
    fontSize: "0.8em",
    lineHeight: 1.5
  };

  const aStyle = {
    color: "#FFFFFF",
    textDecoration: "none",
    "&:hover": { textDecoration: "underline" }
  };

  const imgStyle = {
    height: 20,
    margin: "0 5px"
  };
  return (
    <footer
      css={{
        backgroundColor: "#673ab7",
        color: "#ffffff",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%"
      }}
    >
      <p css={{ ...pStyle }}>
        &copy; 2019 DSCUSSME by{" "}
        <a href="#" css={{ ...aStyle }}>
          dscussme development group
        </a>
      </p>
      <p css={{ ...pStyle }}>
        <a href="https://www.facebook.com/" css={{ ...aStyle }}>
          <img
            src="../assets/facebook-logo.svg"
            alt="Facebook link"
            css={{ ...imgStyle }}
          />
        </a>
        <a href="https://www.twitter.com/" css={{ ...aStyle }}>
          <img
            src="../assets/twitter.svg"
            alt="twitter link"
            css={{ ...imgStyle }}
          />
        </a>
        <a
          href="https://github.com/codeableorg/react-dscussme"
          css={{ ...aStyle }}
        >
          <img
            src="../assets/github.svg"
            alt="Github link"
            css={{ ...imgStyle }}
          />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
