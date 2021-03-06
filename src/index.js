import React, { memo } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import AuthService from "./service/auth_service";
import ImageUploader from "./service/image_uploader";
import ImageFileInput from "./components/image_file_input/image_file_input";
import CardRespository from "./service/card_repository";

const authService = new AuthService();
const imageUploader = new ImageUploader();
const cardRepository = new CardRespository();

const FileInput = memo((props) => (
  <ImageFileInput {...props} imageUploader={imageUploader} />
));

ReactDOM.render(
  <React.StrictMode>
    <App
      authService={authService}
      FileInput={FileInput}
      cardRepository={cardRepository}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
