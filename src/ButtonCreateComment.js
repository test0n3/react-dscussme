/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import VisuallyHidden from "@reach/visually-hidden";
import CommentForm from "./CommentForm";

function ButtonCreateComment() {
  const [showDialog, setShowDialog] = React.useState(false);

  function handleDialogOff() {
    setShowDialog(false);
  }

  function handleDialogOn() {
    setShowDialog(true);
  }

  return (
    <>
      <button
        onClick={handleDialogOn}
        css={{
          border: "none",
          borderRadius: 5,
          padding: "10px 20px",
          fontWeight: "bold",
          backgroundColor: "#673ab7",
          color: "#FFFFFF",
          cursor: "pointer",
          marginBottom: 5
        }}
      >
        <VisuallyHidden>Create Comment</VisuallyHidden>
        REPLY
      </button>
      <CommentForm showDialog={showDialog} handleDialogOff={handleDialogOff} />
    </>
  );
}

export default ButtonCreateComment;
