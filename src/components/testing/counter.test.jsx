/* eslint-env vitest */
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./counter.jsx";

test("incrementa el contador al hacer clic", () => {
  render(<Counter />);

  const button = screen.getByText("Incrementar");
  const label = screen.getByText(/Contador/i);

  fireEvent.click(button);
  expect(label).toHaveTextContent("Contador: 1");
  fireEvent.click(button);
  expect(label).toHaveTextContent("Contador: 2");
});
