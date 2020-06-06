import React, { useState, useEffect } from "react";
import { displayGif, audioUpload } from "./fileHandler/fileHandler";
import ReactAudioPlayer from "react-audio-player";
import Form from "react-bootstrap/Form";
import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji, BaseEmoji } from "emoji-mart";
import { Paper } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./App.css";

interface emoteBarProps {
  emoteList: BaseEmoji[];
}

function App() {
  const [emotes, setEmotes] = useState<any[]>([]);

  const EmojiBar = (props: emoteBarProps) => {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              {props.emoteList.map((value: BaseEmoji, index) => {
                console.log(value);
                // need to add conditional for creating a new table row when emoji count % 0
                return (
                  <td key={index.toString()}>
                    <Emoji
                      key={index.toString()}
                      set={"apple"}
                      size={24}
                      emoji={value}
                    />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  useEffect(() => {}, [emotes]);

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
      <div className={"media-container"}>
        <Paper variant="elevation" elevation={12}>
          <div className={"gif"}>
            <img
              id="gif"
              src=""
              height="200"
              width="300"
              alt="Image preview..."
            />
            <ReactAudioPlayer id="audio" src="" controls />
            <EmojiBar emoteList={emotes} />
          </div>
        </Paper>
      </div>
      <br />
      <div className={"emoji-picker"}>
        <Picker
          set="apple"
          onClick={(emoji) => setEmotes([...emotes, emoji])}
        />
      </div>
    </div>
  );
}

export default App;
