import React from "react";
import Login from "./Login";
import Discussions from "./Discussions";
import { Router, Redirect } from "@reach/router";
import LocalStorage from "./helpers/Localstorage";
import { UserProvider } from "./contexts/user";
import { DiscussionProvider } from "./contexts/discussion";
import Discussion from "./Discussion";

import Header from "./Header";
import Footer from "./Footer";

import { CommentProvider } from "./contexts/comment";
function App() {
  const fakeDiscussions = [
    {
      id: 1,
      date: 1560048227330,
      author: { username: "test1", email: "test1@email.com" },
      title: "This is the first fake title create by some pompous jerk",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    },
    {
      id: 2,
      date: 1560148227330,
      author: { username: "DonKatze", email: "DonKatze@email.com" },
      title: "Vamos a jugar Flechitas",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    },
    {
      id: 3,
      date: 1560655227330,
      author: { username: "manKicker", email: "manKicker@email.com" },
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    }
  ];

  const fakeComments = [
    {
      id: 2,
      date: 1560633327330,
      author: { username: "test1", email: "test1@email.com" },
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!",
      parentId: null,
      discussionId: 1
    },
    {
      id: 3,
      date: 1560333227330,
      author: { username: "Duke", email: "Duke@email.com" },
      body: "Kill Lian, Kill Lian",
      parentId: 2,
      discussionId: 1
    },
    {
      id: 5,
      date: 1563338227330,
      author: { username: "diegoC", email: "diegoC@email.com" },
      body: "No sapbeee, a jugar PES",
      parentId: null,
      discussionId: 2
    },
    {
      id: 6,
      date: 1560666227330,
      author: { username: "manKicker", email: "manKicker@email.com" },
      body: "Ordenan la sala después de terminar de jugar",
      parentId: 5,
      discussionId: 2
    },
    {
      id: 8,
      date: 1560666227330,
      author: { username: "diegoC", email: "diegoC@email.com" },
      body: "No entiendo, ¿es freestyle?",
      parentId: null,
      discussionId: 3
    },
    {
      id: 9,
      date: 1560111127330,
      author: { username: "mancito", email: "mancito@email.com" },
      body: "Bebecita~~~~ PRRRRRRR",
      parentId: 8,
      discussionId: 3
    }
  ];
  const [user, setUser] = React.useState(JSON.parse(LocalStorage.existUser()));
  const [discussions, setDiscussions] = React.useState(
    JSON.parse(LocalStorage.shareDiscussions()) || fakeDiscussions
  );
  const [comments, setComments] = React.useState(
    JSON.parse(LocalStorage.shareComments()) || fakeComments
  );

  function getAllComments(id) {
    return comments.filter(comment => comment.discussionId === id);
  }

  function updateUser(newUser) {
    LocalStorage.saveUser(newUser);
    setUser(newUser);
  }

  function updateDiscussions(newDiscussion) {
    LocalStorage.saveDiscussions(discussions.concat(newDiscussion));
    setDiscussions(discussions.concat(newDiscussion));
  }
  function updateComments(newComment) {
    LocalStorage.saveComments(comments.concat(newComment));
    setComments(comments.concat(newComment));
  }
  return (
    <>
      <UserProvider user={user} setUser={updateUser}>
        <Header />
        <DiscussionProvider
          discussions={discussions}
          setDiscussions={updateDiscussions}
        >
          <CommentProvider comments={comments} setComments={updateComments}>
            <Router>
              {LocalStorage.existUser() ? (
                <Redirect from="/login" to="/" noThrow />
              ) : (
                <Redirect from="/" to="/login" noThrow />
              )}
              <Login path="/login" />
              <Discussions
                path="/"
                discussions={discussions}
                getAllComments={getAllComments}
              />
              <Discussion
                path="/discussion/:id"
                discussions={discussions}
                getAllComments={getAllComments}
              />
            </Router>
          </CommentProvider>
        </DiscussionProvider>
      </UserProvider>
      <Footer />
    </>
  );
}
export default App;
