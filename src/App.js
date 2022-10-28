import React, { useState } from "react";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal.jsx";
import Title from "./components/Title.jsx";
import UploadForm from "./components/UploadForm";


function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
