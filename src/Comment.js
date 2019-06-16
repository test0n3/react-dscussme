/** @jsx jsx */
import React from "react";
import ButtonCreateComment from "./ButtonCreateComment";
import { jsx } from "@emotion/core";

function Comment({ comment, id, children, getAllComments }) {
  const childrenComments = children;
  const discussionStyle = {
    fontSize: "1.2em",
    border: "1px solid #666666",
    borderRadius: 10,
    margin: 10,
    padding: "0 10px"
  };

  const styledChildComment = {
    marginLeft: 80
  };

  const styledComment = {
    marginLeft: 40
  };

  return (
    <>
      <div css={comment.parentId ? styledChildComment : styledComment}>
        <div css={{ ...discussionStyle }}>
          <section>
            <p>{comment.body}</p>
          </section>
          <section
            css={{
              display: "flex",
              flexDirection: "row",
              margin: 0,
              padding: 0,
              justifyContent: "space-between",
              fontSize: "0.6em"
            }}
          >
            <div css={{ display: "flex", flexDirection: "row" }}>
              <p
                css={{
                  width: 150,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  margin: 5
                }}
              >
                by {comment.author.username}
              </p>
              <p css={{ width: 150, margin: 5 }}>{comment.date}</p>
            </div>
            {!comment.parentId && (
              <ButtonCreateComment id={id} parentId={comment.id} />
            )}
          </section>
        </div>
      </div>
      {childrenComments.map(comment => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            id={comment.discussionId}
            children={[]}
            getAllChildren={[]}
          />
        );
      })}
    </>
  );
}

export default Comment;
