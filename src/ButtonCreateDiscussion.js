/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
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
      <button
        onClick={handleDialogOn}
        css={{
          background:
            "#673ab7 no-repeat center/60% url('../assets/pencil.svg')",
          width: 50,
          height: 50,
          position: "fixed",
          bottom: 80,
          right: 10,
          border: "none",
          borderRadius: "50%",
          cursor: "pointer"
        }}
      >
        <VisuallyHidden>Create Discussion</VisuallyHidden>
      </button>
      <DiscussionForm
        showDialog={showDialog}
        handleDialogOff={handleDialogOff}
      />
    </>
  );
}

export default ButtonCreateDiscussion;
