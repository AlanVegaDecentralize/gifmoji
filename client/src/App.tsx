import React, { useState, useEffect } from "react";
// import TargetBox from "./components/Dnd";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
import ImageUploader from "react-images-upload";
import "./App.css";

function App() {
  const [pictures, setPictures] = useState<File[]>([]);
  // const [name, setName] = useState<File>();
  const onDrop = (picture: any) => {
    setPictures([...pictures, picture]);
  };

  const reader = new FileReader();

  useEffect(() => {
    reader.onload = function () {
      let dataURL = reader.result;
      let output: HTMLImageElement | null = document.getElementById("gif");
      if (output) output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);
  }, [pictures]);

  let gifName = pictures[0];
  console.log(gifName);
  return (
    <div className="App">
      <ImageUploader
        className={"gif"}
        withIcon={false}
        onChange={onDrop}
        accept="image/*"
        withLabel={false}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
        withPreview={true}
        singleImage={false}
      />
      <img id="gif" />
    </div>
  );
}

export default App;
