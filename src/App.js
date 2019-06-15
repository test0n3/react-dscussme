import React from "react";
import Login from "./Login";
import Discussions from "./Discussions";

function App() {
  const fakeDiscussions = [
    {
      id: 1,
      date: "2019-06-13, 09:58 AM",
      author: "test1",
      title: "This is the first fake title create by some pompous jerk",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    },
    {
      id: 2,
      date: "2019-06-13, 10:58 AM",
      author: "DonKatze",
      title: "Vamos a jugar Flechitas",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    },
    {
      id: 3,
      date: "2019-06-13, 10:58 AM",
      author: "manKicker",
      title: "Lorem ipsum dolor sit amet",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!"
    }
  ];

  const fakeComments = [
    {
      id: 2,
      date: "2019-06-13, 10:00 AM",
      author: "test1",
      body:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia eius ullam ex, dolores, molestias qui ipsum quibusdam consequuntur quam natus fugiat minus quae earum ad architecto similique debitis ut voluptates!",
      parentId: null,
      discussionId: 1
    },
    {
      id: 3,
      date: "2019-06-13, 11:00 AM",
      author: "Duke",
      body: "Kill Lian, Kill Lian",
      parentId: 2,
      discussionId: 1
    },
    {
      id: 5,
      date: "2019-06-13, 11:00 AM",
      author: "diegoC",
      body: "No sapbeee, a jugar PES",
      parentId: null,
      discussionId: 2
    },
    {
      id: 6,
      date: "2019-06-13, 11:02 AM",
      author: "manKicker",
      body: "Ordenan la sala después de terminar de jugar",
      parentId: 5,
      discussionId: 2
    },
    {
      id: 8,
      date: "2019-06-13, 11:00 AM",
      author: "diegoC",
      body: "No entiendo, ¿es freestyle?",
      parentId: null,
      discussionId: 3
    },
    {
      id: 9,
      date: "2019-06-13, 11:02 AM",
      author: "mancito",
      body: "Bebecita~~~~ PRRRRRRR",
      parentId: 8,
      discussionId: 3
    }
  ];

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

  return (
    <div>
      {/* <Discussions discussions={discussions} getAllComments={getAllComments} /> */}
      <Login />
    </div>
  );
}
export default App;
