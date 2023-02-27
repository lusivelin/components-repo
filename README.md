# React Components Demo

npm install

npm run dev

Serve on: http://localhost:5173/

# Modal

```tsc
    const [open, setOpen] = useState(false);
    <Modal
        kind="right"
        open={open}
        onClose={(value) => setOpen(value)}
    >
        <h1>Modal content come here</h1>
    </Modal>
```

```
    UI Customization For Modal
    <Modal
        kind="right"
        open={open}
        onClose={(value) => setOpen(value)}
        uiProps={{
            container: {
                // normal css here
                background: "red"
            },
            content: {
                // normal css here
                borderRadius: "0"
            },
            mask: {
                // normal css here
                opacity: 0.5
            }
        }}
    >
        <h1>Modal content come here</h1>
    </Modal>

```

```
    Props for Modal
    export type ModalProps = {
      open: boolean;
      onClose?: (value: boolean) => void;
      kind?: "left" | "right" | "default";
      uiProps?: {
        container?: CSS;
        content?: CSS;
        mask?: CSS;
      };
    };

```
