import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test.skip("renders header text", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/inicio/i);
  expect(linkElement).toBeInTheDocument();
});
