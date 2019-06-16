/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Comment from "./Comment";
import ButtonCreateComment from "./ButtonCreateComment";
import { Link } from "@reach/router";
import { hidden } from "ansi-colors";

function Discussion({ discussion, getAllComments, id }) {
  let comments = getAllComments(discussion.id);
  console.log(discussion);
  return (
    <>
      <article
        css={{
          fontSize: "1.2em",
          border: "1px solid #666666",
          borderRadius: 10,
          margin: 10,
          padding: "0 10px"
        }}
      >
        <section css={{ margin: 0, padding: 0 }}>
          <Link
            to={`/discussion/${id}`}
            css={{
              textDecoration: "none",
              color: "#333333",
              fontSize: "1.2em",
              "&:hover": { color: "#999999" }
            }}
          >
            <p>{discussion.title}</p>
          </Link>
        </section>
        <section
          css={{
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "row",
            fontSize: "0.6em",
            justifyContent: "end"
          }}
        >
          {/* <p className="comments">{discussion.id}</p> */}
          <p
            className="author"
            css={{
              margin: 5,
              width: 150,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis"
            }}
          >
            by {discussion.author.username}
          </p>
          <p className="time" css={{ margin: 5, width: 150 }}>
            {discussion.date}
          </p>
        </section>
      </article>
    </>
  );
}

export default Discussion;
