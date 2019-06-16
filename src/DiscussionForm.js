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
      author: user,
      title: title,
      body: body
    });
    handleDialogOff();
  }

  const styledButton = {
    cursor: "pointer",
    color: "#FFFFFF",
    backgroundColor: "#673ab7",
    borderRadius: "50%",
    border: "none",
    width: 30,
    height: 30,
    fontSize: "2em",
    alignSelf: "flex-end",
    padding: 0,
    margin: 0,
    lineHeight: 0
  };

  const styledDialogOverlay = {
    background: "rgba(255, 255, 255, 0.9)"
  };

  const styledDialogContent = {
    boxShadow: "rgba(0, 0, 0, 0.34) 0px 10px 50px",
    border: "1px solid gray",
    borderRadius: "8px",
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
    fontSize: "1.5em"
  };

  const styledTextArea = {
    fontSize: "1.5em",
    height: "30vh",
    borderRadius: 6,
    border: "1px solid #999999"
  };

  const styledInput = {
    fontSize: "1.5em",
    marginBottom: 20
  };

  const styledSubmit = {
    backgroundColor: "#673ab7",
    color: "#FFFFFF",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px",
    fontSize: "1.5em",
    alignSelf: "center",
    margin: "10px 0",
    padding: "10px 20px"
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
          <br />
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
