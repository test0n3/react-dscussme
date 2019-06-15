/** @jsx jsx */
import React from "react";
import ButtonCreateComment from "./ButtonCreateComment";
import { jsx } from "@emotion/core";

function Comment({ comment, id }) {
  console.log(id);
  const styledChildComment = {
    marginLeft: "50px"
  };

  const styledComment = {
    marginLeft: "0px"
  };

  return (
    <div css={comment.parentId ? styledChildComment : styledComment}>
      <p>{comment.body}</p>
      <p>{comment.author.username}</p>
      <p>{comment.date}</p>
      {!comment.parentId && <ButtonCreateComment id={id} />}
    </div>
  );
}

export default Comment;
