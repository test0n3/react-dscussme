/** @jsx jsx */
import React from "react";
import ButtonCreateComment from "./ButtonCreateComment";
import { jsx } from "@emotion/core";

function Comment({ comment }) {
  const styledChildComment = {
    marginLeft: "50px"
  };

  const styledComment = {
    marginLeft: "0px"
  };

  return (
    <div css={comment.parentId ? styledChildComment : styledComment}>
      <p>{comment.body}</p>
      <p>{comment.author}</p>
      <p>{comment.date}</p>
      {!comment.parentId && <ButtonCreateComment />}
    </div>
  );
}

export default Comment;