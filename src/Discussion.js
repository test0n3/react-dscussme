import React from "react";
import Comment from "./Comment";
import ButtonCreateComment from "./ButtonCreateComment";
import { Link } from "@reach/router";
import { useDiscussion } from "./contexts/discussion";
import { useUser } from "./contexts/user";

function Discussion({ getAllComments, id }) {
  const { discussions, setDiscussions } = useDiscussion();
  const { user } = useUser();
  const discussion = discussions.find(discussion => discussion.id == id);

  let comments = getAllComments(discussion.id);
  console.log("GAA", id);

  return (
    <>
      <p>{discussion.id}</p>
      <p>{discussion.date}</p>
      <p>{discussion.author.username}</p>
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
