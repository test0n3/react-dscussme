/** @jsx jsx */
import React from "react";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { jsx } from "@emotion/core";

function CommentForm({ showDialog, handleDialogOff }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleDialogOff();
  }

  const styledButton = {
    backgroundColor: "tomato",
    border: "none",
    cursor: "pointer",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    fontSize: "2em",
    alignSelf: "flex-end"
  };

  const styledDialogOverlay = { background: "rgba(255, 255, 255, 0.9)" };

  const styledDialogContent = {
    boxShadow: "rgba(0, 0, 0, 0.34) 0px 10px 50px",
    border: "solid 1px gray",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column"
  };

  const styledForm = {
    display: "flex",
    flexDirection: "column"
  };

  return (
    <DialogOverlay
      style={styledDialogOverlay}
      isOpen={showDialog}
      onDismiss={handleDialogOff}
    >
      <DialogContent style={styledDialogContent}>
        <button
          className="close-button"
          onClick={handleDialogOff}
          css={styledButton}
        >
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <form onSubmit={handleSubmit} css={styledForm}>
          <label htmlFor="body-comment">Comment</label>
          <textarea
            autoFocus
            type="text"
            name="body-comment"
            id="body-comment"
          />
          <button type="submit">Create</button>
        </form>
      </DialogContent>
    </DialogOverlay>
  );
}

export default CommentForm;
