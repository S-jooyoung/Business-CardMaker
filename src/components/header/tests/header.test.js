// import dependencies
import React from "react";
import userEvent from "@testing-library/user-event";

// import custom-component
import Header from "../header";

// import snapshot-testing methods
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  let headerComponent;
  let onLogout;

  beforeEach(() => {
    onLogout = jest.fn();
    headerComponent = <Header onLogout={onLogout} />;
  });

  it("render", () => {
    const component = renderer.create(headerComponent).toJSON();
    expect(component).toMatchSnapshot();
  });

  describe("Button Click", () => {
    let button;

    beforeEach(() => {
      render(headerComponent);
      button = screen.getByText("Logout");
    });

    it('calls onLogout when "Logout" button clicked', () => {
      userEvent.click(button);

      expect(onLogout).toHaveBeenCalled();
    });
  });
});
