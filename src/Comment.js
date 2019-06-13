import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import CommentForm from "./CommentForm";

function Comment() {
  const [showDialog, setShowDialog] = React.useState(false);

  function handleDialogOff() {
    setShowDialog(false);
  }

  function handleDialogOn() {
    setShowDialog(true);
  }

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam
        impedit aspernatur incidunt veritatis non nisi deserunt, nobis sint
        officia sed illum voluptas ipsam quidem, explicabo cum rerum rem
        molestiae!
      </p>
      <button onClick={handleDialogOn}>
        <VisuallyHidden>Create</VisuallyHidden>
        <span aria-hidden>+</span>
      </button>
      <CommentForm showDialog={showDialog} handleDialogOff={handleDialogOff} />
    </div>
  );
}

export default Comment;
