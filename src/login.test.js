import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Login from "./Login";

test("Login Form on Submit", () => {
  const placeholder = jest.fn();
  const { asFragment } = render(
    <Login placeholder={placeholder} />
  );
  expect(asFragment()).toMatchSnapshot();
});