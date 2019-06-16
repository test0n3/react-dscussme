/** @jsx jsx */
import React from "react";
import "@reach/dialog/styles.css";
import VisuallyHidden from "@reach/visually-hidden";
import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import { jsx } from "@emotion/core";
import { useComment } from "./contexts/comment";
import { useUser } from "./contexts/user";
import { useDiscussion } from "./contexts/discussion";

function CommentForm({ showDialog, handleDialogOff, id, parentId = null }) {
  const { setComments } = useComment();
  const { user } = useUser();
  const { discussions } = useDiscussion();

  function handleSubmit(event) {
    event.preventDefault();
    const body = event.target.elements["body-comment"].value;
    setComments({
      id: Date.now(),
      date: Date.now(),
      author: user,
      body: body,
      parentId: parentId,
      discussionId: id
    });
    handleDialogOff();
  }

  const styledButton = {
    cursor: "pointer",
    color: "#FFFFFF",
    backgroundColor: "#673ab7",
    border: "none",
    borderRadius: "50%",
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
    fontSize: "1.5em"
  };

  const styledTextArea = {
    fontSize: "1.5em",
    height: "30vh",
    borderRadius: 6,
    border: "1px solid #999999"
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
