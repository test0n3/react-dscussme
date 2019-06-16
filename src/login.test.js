import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";
import { UserProvider } from "./contexts/user";

test("Login Form on Submit", () => {
  const placeholder = "write login";
  const { asFragment } = render(
    <UserProvider>
      <Login placeholder={placeholder} />
    </UserProvider>
  );
  expect(asFragment()).toMatchSnapshot();
});