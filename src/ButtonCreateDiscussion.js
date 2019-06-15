import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import DiscussionForm from "./DiscussionForm";

function ButtonCreateDiscussion() {
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
        <VisuallyHidden>Create Discussion</VisuallyHidden>
        <span aria-hidden>+</span>
      </button>
      <DiscussionForm
        showDialog={showDialog}
        handleDialogOff={handleDialogOff}
      />
    </>
  );
}

export default ButtonCreateDiscussion;
