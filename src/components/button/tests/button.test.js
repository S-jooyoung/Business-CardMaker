// import dependencies
import React from "react";

// import custom-component
import Button from "../button";

// import snapshot-testing methods
import renderer from "react-test-renderer";

describe("Button", () => {
  let name = "테스트";
  let onClick;
  let buttonComponent;

  beforeEach(() => {
    onClick = jest.fn();
    buttonComponent = <Button name={name} onClick={onClick} />;
  });

  it("render", () => {
    const component = renderer.create(buttonComponent).toJSON();
    expect(component).toMatchSnapshot();
  });
});
