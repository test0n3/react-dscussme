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

function App() {
  const fakeDiscussions = [
    {
      id: 1,
      date: "2019-06-13, 09:58 AM",
      author: { username: "test1", email: "test1@email.com" },
      title: "This is the first fake title create by some pompous jerk",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    },
    {
      id: 2,
      date: "2019-06-13, 10:58 AM",
      author: { username: "DonKatze", email: "DonKatze@email.com" },
      title: "Vamos a jugar Flechitas",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    },
    {
      id: 3,
      date: "2019-06-13, 10:58 AM",
      author: { username: "manKicker", email: "manKicker@email.com" },
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    }
  ];

  const fakeComments = [
    {
      id: 2,
      date: "2019-06-13, 10:00 AM",
      author: { username: "test1", email: "test1@email.com" },
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!",
      parentId: null,
      discussionId: 1
    },
    {
      id: 3,
      date: "2019-06-13, 11:00 AM",
      author: { username: "Duke", email: "Duke@email.com" },
      body: "Kill Lian, Kill Lian",
      parentId: 2,
      discussionId: 1
    },
    {
      id: 5,
      date: "2019-06-13, 11:00 AM",
      author: { username: "diegoC", email: "diegoC@email.com" },
      body: "No sapbeee, a jugar PES",
      parentId: null,
      discussionId: 2
    },
    {
      id: 6,
      date: "2019-06-13, 11:02 AM",
      author: { username: "manKicker", email: "manKicker@email.com" },
      body: "Ordenan la sala después de terminar de jugar",
      parentId: 5,
      discussionId: 2
    },
    {
      id: 8,
      date: "2019-06-13, 11:00 AM",
      author: { username: "diegoC", email: "diegoC@email.com" },
      body: "No entiendo, ¿es freestyle?",
      parentId: null,
      discussionId: 3
    },
    {
      id: 9,
      date: "2019-06-13, 11:02 AM",
      author: { username: "mancito", email: "mancito@email.com" },
      body: "Bebecita~~~~ PRRRRRRR",
      parentId: 8,
      discussionId: 3
    }
  ];
  const [user, setUser] = React.useState(LocalStorage.existUser());
  const [discussions, setDiscussions] = React.useState(fakeDiscussions);
  const [comments, setComments] = React.useState(fakeComments);

  function getAllComments(id) {
    return comments.filter(comment => comment.discussionId === id);
  }

  function getChildrenComments(id) {
    return comments.filter(comment => comment.parentId === id);
  }

  function addChildComment(child) {
    setComments([...comments, child]);
  }

  function updateUser(newUser) {
    LocalStorage.saveUser(newUser);
    setUser(newUser);
  }

  function updateDiscussions(newDiscussion) {
    LocalStorage.saveDiscussions(discussions.concat(newDiscussion));
    setDiscussions(discussions.concat(newDiscussion));
  }

  return (
    <>
      <UserProvider user={user} setUser={updateUser}>
        <Header />
        <DiscussionProvider
          discussions={discussions}
          setDiscussions={updateDiscussions}
        >
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
        </DiscussionProvider>
      </UserProvider>
      <Footer />
    </>
  );
}
export default App;
