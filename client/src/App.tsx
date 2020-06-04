import React, { useState, useEffect } from "react";
// import TargetBox from "./components/Dnd";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import ImageUploader from "react-images-upload";
import "./App.css";

function App() {
  const [pictures, setPictures] = useState<File[]>([]);
  const [gif, setGif] = useState<string>();
  const onDrop = (picture: any) => {
    setPictures([...pictures, picture]);
    console.log(pictures);
  };

  // const fileToImage = () => {
  //   const label;
  // };
  // console.log(pictures);
  // const fileReader = (gif: any) => {
  //   let file = gif;
  //   let reader = new FileReader();

  //   reader.readAsDataURL(file);

  //   reader.onload = () => {
  //     console.log(reader.result);
  //   };s

  //   reader.onerror = () => {
  //     console.log(reader.error);
  //   };
  //   setPictures([...pictures, gif]);
  // };

  useEffect(() => {
    if (pictures) {
      let blob = new Blob(pictures, { type: "image/gif" });
      let reader = new FileReader();

      reader.readAsDataURL(blob);

      reader.addEventListener(event) {
        console.log(reader.result);
        // let output = reader.result ? reader.result.toString() : "null";
        let img = document.getElementById("gif") as HTMLImageElement;
        if (!(img === null)) img.src = (URL || webkitURL).createObjectURL(blob);
      };
      // setGif(reader.readAsDataURL(blob));
      // "data:image/png;base64,R0lGODlhDAAMAKIFAF5LAP/zxAAAANyuAP/gaP///wAAAAAAACH5BAEAAAUALAAAAAAMAAwAAAMlWLPcGjDKFYi9lxKBOaGcF35DhWHamZUW0K4mAbiwWtuf0uxFAgA7"
      //   reader.onload = function () {
      //     let dataURL = reader.result;
      //     let output:HTMLImageElement = document.getElementById("gif")!;
      //     output.src =
      //   };
    }
  }, [pictures]);

  // function displayGif(gif: any) {
  //   console.log(gif);
  //   console.log(typeof gif);
  //   console.log(typeof gif[0]);
  //   // const preview: HTMLImageElement | null = document.getImageElementById(
  //   //   "gif"
  //   // );

  //   const reader = new FileReader();

  //   reader.addEventListener(
  //     "load",
  //     function () {
  //       // convert image file to base64 string
  //       setGif(reader.result?.toString());
  //     },
  //     false
  //   );

  // if (gif) {
  //   console.log("test");

  //   reader.readAsDataURL(gif);
  // }
  // }

  return (
    <div className="App">
      <ImageUploader
        className={"gif"}
        withIcon={false}
        onChange={onDrop}
        withLabel={false}
        imgExtension={[".gif"]}
        maxFileSize={5242880}
        withPreview={false}
        singleImage={true}
      />
      <img id="gif" alt="test" />
    </div>
  );
}

export default App;
