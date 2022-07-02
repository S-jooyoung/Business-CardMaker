// import dependencies
import React from "react";

// import custom-component
import Header from "../header";

// import snapshot-testing methods
import renderer from "react-test-renderer";

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
});
