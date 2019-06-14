import React from "react";
import Comment from "./Comment";
import ButtonCreateComment from "./ButtonCreateComment";

function Discussion({ discussion, getAllComments }) {
  let comments = getAllComments(discussion.id);

  return (
    <>
      <p>{discussion.id}</p>
      <p>{discussion.date}</p>
      <p>{discussion.author}</p>
      <p>{discussion.title}</p>
      <p>{discussion.body}</p>
      <hr />
      <h2>Comments</h2>
      <ButtonCreateComment />
      {comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />;
      })}
      <hr />
    </>
  );
}

export default Discussion;
