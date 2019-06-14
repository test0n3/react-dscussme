/** @jsx jsx */
import React from "react";
import "@reach/dialog/styles.css";
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
    width: "calc(1.4em + 1vw)",
    height: "calc(1.4em + 1vw)",
    fontSize: "calc(1.4em + 1vw)",
    alignSelf: "flex-end"
  };

  const styledDialogOverlay = {
    background: "rgba(255, 255, 255, 0.9)"
  };

  const styledDialogContent = {
    boxShadow: "rgba(0, 0, 0, 0.34) 0px 10px 50px",
    border: "solid 1px gray",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    height: "65vh",
    justifyContent: "space-around"
  };

  const styledForm = {
    display: "flex",
    flexDirection: "column"
  };

  const styledLabel = {
    fontSize: "calc(1em + 1vw)"
  };

  const styledTextArea = {
    height: "30vh"
  };

  const styledSubmit = {
    backgroundColor: "#8eff47",
    border: "none",
    cursor: "pointer",
    borderRadius: "15px",
    fontSize: "calc(1em + 1vw)",
    alignSelf: "center",
    margin: "10px 0",
    padding: "3%"
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
          <label htmlFor="body-comment" css={styledLabel}>
            Comment
          </label>
          <textarea
            autoFocus
            type="text"
            name="body-comment"
            id="body-comment"
            css={styledTextArea}
          />
          <button type="submit" css={styledSubmit}>
            Create
          </button>
        </form>
      </DialogContent>
    </DialogOverlay>
  );
}

export default CommentForm;
