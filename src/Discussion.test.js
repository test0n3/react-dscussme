import React from "react";
import { render } from "@testing-library/react";
import Discussion from "./Discussion";
import { DiscussionProvider } from "./contexts/discussion";
import { UserProvider } from "./contexts/user";
import { CommentProvider } from "./contexts/comment";

test("Discussion component", async () => {
  const getAllComments = () => [];
  const setDiscussions = jest.fn();

  const discussions = [
    {
      id: new Date("2019-06-13T21:50:18.315Z").getTime(),
      date: "2019-06-13T21:50:18.315Z",
      author: "Clarissa",
      title: "La vida es bella",
      body: "ideas sueltas"
    }
  ];

  const { asFragment } = render(
    <DiscussionProvider
      discussions={discussions}
      setDiscussions={setDiscussions}
    >
      <UserProvider>
        <CommentProvider>
          <Discussion
            getAllComments={getAllComments}
            id={new Date("2019-06-13T21:50:18.315Z").getTime()}
          />
        </CommentProvider>
      </UserProvider>
    </DiscussionProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
