import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("renders without errors", () => {
    render(<App />);
    expect(screen.getByText("Drag to change image")).toBeInTheDocument();
  });

  it("handles mouse drag Left correctly", async () => {
    render(<App />);
    const content = screen.getByTestId("content");

    // Drag Left -100px
    fireEvent.mouseDown(content, { clientX: 800 });
    fireEvent.mouseMove(content, { clientX: 700 });
    fireEvent.mouseUp(content, { clientX: 700 });
    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-test-resting-x",
        "-100"
      );
    });
  });

  it("handles mouse drag right correctly", async () => {
    render(<App />);
    const content = screen.getByTestId("content");

    // Drag Left -100px
    fireEvent.mouseDown(content, { clientX: 700 });
    fireEvent.mouseMove(content, { clientX: 800 });
    fireEvent.mouseUp(content, { clientX: 800 });
    await waitFor(() => {
      expect(screen.getByTestId("content")).toHaveAttribute(
        "data-test-resting-x",
        "0"
      );
    });
  });
});
