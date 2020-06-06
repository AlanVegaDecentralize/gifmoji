import React, { useState, useEffect } from "react";
import { displayGif, audioUpload } from "./fileHandler/fileHandler";
import ReactAudioPlayer from "react-audio-player";
import Form from "react-bootstrap/Form";
import "emoji-mart/css/emoji-mart.css";
import { Picker, Emoji } from "emoji-mart";
import { Paper } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import "./App.css";

interface emoteBarProps {
  emoteList: object[];
}

function App() {
  const [emotes, setEmotes] = useState<any[]>([]);

  // const addEmoji = (props: object[]) => {
  //   props.map();
  // };
  let em = { id: "santa", skin: 3 };

  const EmojiBar = (props: emoteBarProps) => {
    let emotelist = props.emoteList.map((value, index) => {
      let choosenEmote = value.toString();
      return (
        <td key={index.toString()}>
          <Emoji
            key={index.toString()}
            set={"apple"}
            size={24}
            emoji={choosenEmote}
          />
        </td>
      );
    });
    return (
      <div>
        <table>
          <tbody>
            <tr>{emotelist}</tr>
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
        <Paper variant="elevation" elevation={24}>
          <img
            id="gif"
            src=""
            height="200"
            width="300"
            alt="Image preview..."
          />
          <ReactAudioPlayer id="audio" src="" controls />
        </Paper>
      </div>
      <br />
      <div style={{ position: "relative" }}>
        <EmojiBar emoteList={emotes} />
      </div>
      <div className={"emoji-picker"}>
        <Picker
          set="apple"
          onClick={(emoji) => setEmotes([...emotes, emoji])}
        />
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              {emotes.map((value, index) => {
                console.log(value);
                let choosenEmote = value.id.toString();
                // need to add conditional for creating a new table row when emoji count % 0
                return (
                  <td key={index.toString()}>
                    <Emoji
                      key={index.toString()}
                      set={"apple"}
                      size={24}
                      emoji={choosenEmote}
                    />
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
