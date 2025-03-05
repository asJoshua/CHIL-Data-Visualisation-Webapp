import React from "react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it, jest } from "@jest/globals";
import { fireEvent, render, screen } from "@testing-library/react";
import { DirectionStack } from "../../../src/components/ui/stack/stack";
import "@testing-library/jest-dom/jest-globals";
import "@testing-library/jest-dom";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as object),
  useNavigate: () => mockNavigate,
}));

const mockImage = "BgIce.jpg";

describe("DirectionStack Component", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    global.alert = jest.fn();
  });

  const stackItems = [
    {
      imageSrc: mockImage,
      text: "Deployment in the Arctic region for climate monitoring.",
    },
    {
      imageSrc: mockImage,
      text: "Our instruments in action on remote glaciers.",
    },
    {
      imageSrc: mockImage,
      text: "Hydrological equipment deployed for river studies.",
    },
  ];

  it("renders the stack with all items", () => {
    render(
      <MemoryRouter>
        <DirectionStack items={stackItems} />
      </MemoryRouter>
    );

    // Check that each card is rendered with the correct text
    stackItems.forEach((item) => {
      expect(screen.getByText(item.text)).toBeInTheDocument();
    });

    // Ensure all images are displayed
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(stackItems.length);
    images.forEach((img, index) => {
      expect(img).toHaveAttribute("src", stackItems[index].imageSrc);
    });
  });

  it("navigates to /deployments when a card is clicked", () => {
    render(
      <MemoryRouter>
        <DirectionStack items={stackItems} />
      </MemoryRouter>
    );

    const firstCard = screen.getByText(stackItems[0].text);

    fireEvent.click(firstCard);
    expect(mockNavigate).toHaveBeenCalledWith("/deployments");
  });
});
