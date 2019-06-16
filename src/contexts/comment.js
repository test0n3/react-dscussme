import React from "react";

const CommentContext = React.createContext();

function CommentProvider({ comments, setComments, children }) {
  return (
    <CommentContext.Provider value={{ comments, setComments }}>
      {children}
    </CommentContext.Provider>
  );
}

function useComment() {
  return React.useContext(CommentContext);
}

export { CommentProvider, useComment };
