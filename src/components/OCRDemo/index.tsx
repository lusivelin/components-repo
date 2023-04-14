import { useState } from "react";
import performOCR from "../../services/performOCR";

function OCRDemo() {
  const [image, setImage] = useState<string>("");
  const [text, setText] = useState<string>("");

  async function handleOCR() {
    const recognizedText = await performOCR(image);
    setText(recognizedText);
  }

  function handleImageUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleOCR}>Perform OCR</button>
      <p>{text}</p>
    </div>
  );
}

export default OCRDemo;
