// import dependencies
import React from "react";

// import custom-component
import Card from "../card";

// import snapshot-testing methods
import renderer from "react-test-renderer";

describe("Card", () => {
  let cardComponent;
  let card = {
    name: "test",
    company: "test",
    title: "test",
    email: "jooyoung.dev@gmail.com",
    message: "test",
    theme: "dark",
    fileURL: "",
  };

  beforeEach(() => {
    cardComponent = <Card card={card} />;
  });

  it("render", () => {
    const component = renderer.create(cardComponent).toJSON();

    expect(component).toMatchSnapshot();
  });
});
