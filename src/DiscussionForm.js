/** @jsx jsx */
import React from "react";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { jsx } from "@emotion/core";
import { useDiscussion } from "./contexts/discussion";
import { useUser } from "./contexts/user";

function DiscussionForm({ showDialog, handleDialogOff }) {
  const { setDiscussions } = useDiscussion();
  const { user } = useUser();

  function handleSubmit(event) {
    event.preventDefault();
    const title = event.target.elements["title-discussion"].value;
    const body = event.target.elements["body-discussion"].value;
    setDiscussions({
      id: Date.now(),
      date: Date.now(),
      author: JSON.parse(user),
      title: title,
      body: body
    });
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

  const styledInput = {};

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
          <label htmlFor="title-discussion" css={styledLabel}>
            Discussion Title
          </label>
          <input
            autoFocus
            type="text"
            name="title-discussion"
            id="title-discussion"
            css={styledInput}
          />
          <label htmlFor="body-discussion" css={styledLabel}>
            Discussion Body
          </label>
          <textarea
            autoFocus
            type="text"
            name="body-discussion"
            id="body-discussion"
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

export default DiscussionForm;
