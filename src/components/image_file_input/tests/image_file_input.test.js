// import dependencies
import React from "react";
import userEvent from "@testing-library/user-event";

// import custom-component
import ImageFileInput from "../image_file_input";

// import snapshot-testing methods
import { render, screen } from "@testing-library/react";

describe("Image_file_input", () => {
  let ImageFileInputComponent;
  let name = "test";
  let upload;
  let onFileChange;

  beforeEach(() => {
    upload = jest.fn();
    onFileChange = jest.fn();
    ImageFileInputComponent = (
      <ImageFileInput upload={upload} onFileChange={onFileChange} name={name} />
    );
  });

  describe("Button Click", () => {
    const file = new File(["hello"], "hello.png", { type: "image/png" });
    let input;
    let button;
    beforeEach(() => {
      render(ImageFileInputComponent);
      input = screen.getByTestId("test-onChange");
      button = screen.getByTestId("test-button");
    });

    it("upload file", () => {
      userEvent.upload(input, file);

      expect(input.files[0]).toStrictEqual(file);
      expect(input.files.item(0)).toStrictEqual(file);
      expect(input.files).toHaveLength(1);
    });

    it("enables filename when file are entered", () => {
      expect(button.innerHTML).toBe("test");
    });
  });
});
