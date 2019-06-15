import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import CommentForm from "./CommentForm";

function ButtonCreateComment({ id }) {
  const [showDialog, setShowDialog] = React.useState(false);
  console.log(id);

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
      <CommentForm
        showDialog={showDialog}
        handleDialogOff={handleDialogOff}
        id={id}
      />
    </>
  );
}

export default ButtonCreateComment;
