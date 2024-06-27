import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const UploadPicture = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = () => {
    // Implement the upload functionality here
    console.log("File uploaded:", selectedFile);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Upload Picture</h2>
      <Input type="file" onChange={handleFileChange} />
      {preview && (
        <div className="mt-4">
          <img src={preview} alt="Preview" className="w-64 h-64 object-cover" />
        </div>
      )}
      <Button onClick={handleUpload} className="mt-4">
        Upload
      </Button>
    </div>
  );
};

export default UploadPicture;