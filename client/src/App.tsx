import React, { useState, useEffect } from "react";
import { displayGif, audioUpload } from "./fileHandler/fileHandler";
import ReactAudioPlayer from "react-audio-player";
import Form from "react-bootstrap/Form";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

interface protectedElements {
  readonly inputElement: HTMLInputElement;
}

function App() {
  return (
    <div className="App">
      <Form>
        <Form.File
          id="gifInput"
          label="Upload GIF..."
          lang="en"
          onChange={displayGif}
          custom
        />
      </Form>
      <Form>
        <Form.File
          id="audioInput"
          label="Upload audio..."
          lang="en"
          onChange={audioUpload}
          custom
        />
      </Form>
      <img id="gif" src="" height="200" width="300" alt="Image preview..." />
      <ReactAudioPlayer id="audio" src="" controls></ReactAudioPlayer>
      <br />
      <Picker set="apple" />
    </div>
  );
}

export default App;
