import React from "react";
import Comment from "./Comment";
import ButtonCreateComment from "./ButtonCreateComment";
import { Link } from "@reach/router";

function Discussion({ discussion, getAllComments, id }) {
  let comments = getAllComments(discussion.id);
  console.log(discussion);
  return (
    <>
      <Link to={`/discussion/${id}`}>
        <p>{discussion.title}</p>
      </Link>
      <p>{discussion.id}</p>
      <p>{discussion.date}</p>
      <p>{discussion.author.username}</p>
      <hr />
    </>
  );
}

export default Discussion;
