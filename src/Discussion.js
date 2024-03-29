/** @jsx jsx */
import React from "react";
import Comment from "./Comment";
import ButtonCreateComment from "./ButtonCreateComment";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import { useDiscussion } from "./contexts/discussion";
import { useUser } from "./contexts/user";

function Discussion({ getAllComments, id }) {
  const { discussions, setDiscussions } = useDiscussion();
  const { user } = useUser();
  const discussion = discussions.find(discussion => discussion.id == id);
  let comments = getAllComments(discussion.id).filter(
    comment => comment.parentId == null
  );

  function getChildrenComments(id) {
    return getAllComments(discussion.id).filter(
      comment => comment.parentId === id
    );
  }

  const discussionStyle = {
    fontSize: "1.2em",
    border: "1px solid #666666",
    borderRadius: "10px",
    margin: 10,
    padding: "0 10px"
  };

  return (
    <div css={{ margin: "70px 0" }}>
      <article css={{ ...discussionStyle }}>
        <section>
          <h3>{discussion.title}</h3>
          <p>{discussion.body}</p>
        </section>
        <section
          css={{
            display: "flex",
            flexDirection: "row",
            margin: 0,
            padding: 0,
            fontSize: "0.6em",
            justifyContent: "space-between"
          }}
        >
          <div
            css={{
              display: "flex",
              flexDirection: "row",
              "@media (max-width: 480px)": {
                display: "block"
              }
            }}
          >
            <p css={{ margin: 5 }}>by {discussion.author.username}</p>
            <p css={{ margin: 5 }}>
              {new Date(discussion.date).toLocaleString()}
            </p>
          </div>
          <ButtonCreateComment id={discussion.id} />
        </section>
      </article>
      <article>
        <h2 css={{ marginLeft: 40 }}>Comments</h2>
        {comments.map(comment => {
          return (
            <Comment
              key={comment.id}
              comment={comment}
              id={discussion.id}
              getAllComments={getAllComments(discussion.id)}
              children={getChildrenComments(comment.id)}
            />
          );
        })}
      </article>
    </div>
  );
}

export default Discussion;
