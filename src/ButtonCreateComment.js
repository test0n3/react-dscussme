import React from "react";
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
      <button onClick={handleDialogOn}>
        <VisuallyHidden>Create Comment</VisuallyHidden>
        <span aria-hidden>+</span>
      </button>
      <CommentForm showDialog={showDialog} handleDialogOff={handleDialogOff} />
    </>
  );
}

export default ButtonCreateComment;
