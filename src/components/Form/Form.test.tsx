import { render, screen } from "@testing-library/react";
import FakeWrapper from "../../mocks/FakeWrapper";
import Form from "./Form";

describe("Given a Form component", () => {
  render(
    <FakeWrapper>
      <Form />
    </FakeWrapper>
  );

  const button = screen.getByRole("button", {
    name: "Login",
  });

  describe("When it renders itself", () => {
    test("Then it should show a title 'Social Network' and button 'Login'", () => {
      const title = screen.getByRole("heading", {
        name: "Social Network",
      });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
