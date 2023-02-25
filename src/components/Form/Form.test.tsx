import { render, screen } from "@testing-library/react";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it renders itself", () => {
    test("Then it should show a title 'Social Network' and button 'Login'", () => {
      render(<Form />);

      const title = screen.getByRole("heading", {
        name: "Social Network",
      });

      const button = screen.getByRole("button", {
        name: "Login",
      });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
