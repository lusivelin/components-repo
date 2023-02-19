import { useState } from "react";
import Modal from "./elements/Modal";
import { globalStyles } from "./stitches.config";

function App() {
  globalStyles();

  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <Modal open={open} onClose={(value) => setOpen(value)}>
      </Modal>
    </div>
  );
}

export default App;
