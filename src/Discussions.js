import React from "react";
import DiscussionMain from "./DiscussionMain";
import ButtonCreateDiscussion from "./ButtonCreateDiscussion";

function Discussions({ discussions, getAllComments }) {
  return (
    <>
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
    </>
  );
}

export default Discussions;
