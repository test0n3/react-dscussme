import React from "react";
import Comment from "./Comment";
import ButtonCreateComment from "./ButtonCreateComment";
import { Link } from "@reach/router";

function Discussion({ discussion, getAllComments }) {
  let comments = getAllComments(discussion.id);

  return (
    <>
      <Link to="/discussion/:title">
        <p>{discussion.title}</p>
      </Link>
      <p>{discussion.id}</p>
      <p>{discussion.date}</p>
      <p>{discussion.author}</p>
      <hr />
    </>
  );
}

export default Discussion;
