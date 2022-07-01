// import dependencies
import React from "react";

// import custom-component
import Footer from "../footer";

// import snapshot-testing methods
import renderer from "react-test-renderer";

describe("Footer", () => {
  let footerComponent;

  beforeEach(() => {
    footerComponent = <Footer />;
  });

  it("render", () => {
    const component = renderer.create(footerComponent).toJSON();
    expect(component).toMatchSnapshot();
  });
});
