import React from "react";

function displayGif() {
  const img = document.getElementById("gif") as HTMLImageElement;
  const file = document.getElementById("gifInput") as HTMLInputElement;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      if (!(img === null)) img.src = reader.result as string;
    },
    false
  );

  if (!(file.files === null)) {
    console.log(file.files[0]);
    reader.readAsDataURL(file.files[0]);
  }
}

function audioUpload() {
  const audio = document.getElementById("audio") as HTMLImageElement;
  const file = document.getElementById("audioInput") as HTMLInputElement;
  const reader = new FileReader();

  reader.addEventListener(
    "load",
    function () {
      // convert image file to base64 string
      if (!(audio === null)) audio.src = reader.result as string;
    },
    false
  );

  if (!(file.files === null)) {
    console.log(file.files[0]);
    reader.readAsDataURL(file.files[0]);
  }
}

export { displayGif, audioUpload };
