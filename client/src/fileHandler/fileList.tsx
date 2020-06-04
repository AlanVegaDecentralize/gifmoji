import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import "react-dropzone-uploader/dist/styles.css";

const gifLoader = () => {
  const [file, setFile] = useState<File>();

  const handleChangeStatus = ({ meta, file }: any, status: any) => {
    console.log(status, meta, file);
  };

  const handleSubmit = (files: any, allFiles: any[]) => {
    console.log(files.map((f: any) => f.meta));
    allFiles.forEach((f: any) => f.remove());
  };

  //   return <Dropzone getUploadParams={setFile} />;
};

export default FileList;
