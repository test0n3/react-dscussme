import React from "react";
import DiscussionMain from "./DiscussionMain";

function Discussions({ discussions, getAllComments }) {
  return (
    <>
      {discussions.map(discussion => {
        return (
          <DiscussionMain
            key={discussion.id}
            discussion={discussion}
            getAllComments={getAllComments}
          />
        );
      })}
    </>
  );
}

export default Discussions;
