import React from "react";
import Discussion from "./Discussion";

function Discussions({ discussions, getAllComments }) {
  return (
    <>
      {discussions.map(discussion => {
        return (
          <Discussion
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
