/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import DiscussionMain from "./DiscussionMain";
import ButtonCreateDiscussion from "./ButtonCreateDiscussion";

function Discussions({ discussions, getAllComments }) {
  return (
    <div css={{ margin: "70px 0" }}>
      {discussions.map(discussion => {
        return (
          <DiscussionMain
            key={discussion.id}
            discussion={discussion}
            getAllComments={getAllComments}
            id={discussion.id}
          />
        );
      })}
      <ButtonCreateDiscussion />
    </div>
  );
}

export default Discussions;
