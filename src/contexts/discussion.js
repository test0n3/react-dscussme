import React from "react";

const DiscussionContext = React.createContext();

function DiscussionProvider({ discussions, setDiscussions, children }) {
  return (
    <DiscussionContext.Provider value={{ discussions, setDiscussions }}>
      {children}
    </DiscussionContext.Provider>
  );
}

function useDiscussion() {
  return React.useContext(DiscussionContext);
}

export { DiscussionProvider, useDiscussion };
