import { useState } from "react";
import Modal from "./elements/Modal";
import { button } from "./elements/Button/style";
import { modalContentBody, modalContentHeader } from "./elements/Modal/style";
import { row } from "./elements/Grid/style";
import Tabs from "./elements/Tabs";
import { globalStyles } from "./style/globalStyles";
import Accordion from "./elements/Accordion";

function App() {
  globalStyles();

  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);
  const [openLeft, setOpenLeft] = useState(false);
  return (
    <div className="App">
      <Accordion />
      <Accordion />
      <Accordion />

      <div>
        <Modal
          kind="right"
          open={openRight}
          onClose={(value) => setOpenRight(value)}
        >
          <header className={modalContentHeader()}>
            <h3>Hello This is title</h3>
            <span onClick={() => setOpenRight(false)}>X</span>
          </header>
          <main className={modalContentBody()}>
            <div>Description Here</div>
          </main>
        </Modal>
        <Modal
          kind="left"
          open={openLeft}
          onClose={(value) => setOpenLeft(value)}
        >
          <header className={modalContentHeader()}>
            <h3>Hello This is title</h3>
            <span onClick={() => setOpenLeft(false)}>X</span>
          </header>
          <main className={modalContentBody()}>
            <div>Description Here</div>
          </main>
        </Modal>
        <Modal
          uiProps={{
            container: {},
            content: {
              background: "transparent",
              boxShadow: "none",
              padding: 0,
              borderRadius: 0,
            },
          }}
          open={open}
          onClose={(value) => setOpen(value)}
        ></Modal>

        <button
          className={button({
            css: {
              background: "$oxford-blue",
            },
          })}
          onClick={() => {
            setOpenLeft(!open);
          }}
        >
          Me Left
        </button>
        <button
          className={button({
            css: {
              background: "$dodger-blue",
            },
          })}
          onClick={() => {
            setOpenRight(!open);
          }}
        >
          Me Right
        </button>
        <button
          className={button({
            css: {
              background: "$munsell-blue",
            },
          })}
          onClick={() => {
            setOpen(!open);
          }}
        >
          Me Default
        </button>
      </div>
      <div className={row()}>
        <button
          className={button({
            css: {
              background: "$platinum",
              color: "$text-black",
            },
          })}
        >
          Me Right
        </button>
        <button
          className={button({
            css: {
              background: "$ghost-white",
              color: "$text-black",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$pistachio",
              color: "$text-black",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$tomato",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$crimson",
            },
          })}
        >
          Add Me
        </button>

        <button
          className={button({
            css: {
              background: "$sky-blue",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$space-cadet",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$jungle-green",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$earth-yellow",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$light-orange",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$steel-pink",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$air-force-blue",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$beaver",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$buff",
            },
          })}
        >
          Add Me
        </button>
        <button
          className={button({
            css: {
              background: "$citron",
            },
          })}
        >
          Add Me
        </button>
      </div>
      <Tabs
        tabs={[
          {
            id: 1,
            name: <h1>Tab 1</h1>,
            content: <TestingOne />,
          },
          {
            id: 2,
            name: <button>Tab 2</button>,
            content: <h1>Hello Tab 2</h1>,
          },
          {
            id: 3,
            name: <button>Tab 3</button>,
            content: <h1>Hello Tab 3</h1>,
          },
        ]}
      />
    </div>
  );
}

const TestingOne = () => {
  return (
    <div style={{ maxHeight: "500px", overflowY: "auto" }}>
      <h1 style={{ display: "flex", justifyContent: "center" }}>
        Hello World Testing One
      </h1>
      <p dangerouslySetInnerHTML={{ __html: "<h1>Hello</h1>" }} />
      <p>
        Lorem ipsum dilor sit amet consectetur adipisicing elit. Earum,
        delectus. Architecto odit ut fugiat explicabo, animi omnis eius
        recusandae expedita quidem ipsum sapiente vitae et doloremque molestiae
        pariatur natus quaerat?
      </p>
      <p>
        Lorem ipsum dilor sit amet consectetur adipisicing elit. Earum,
        delectus. Architecto odit ut fugiat explicabo, animi omnis eius
        recusandae expedita quidem ipsum sapiente vitae et doloremque molestiae
        pariatur natus quaerat?
      </p>
      <p>
        Lorem ipsum dilor sit amet consectetur adipisicing elit. Earum,
        delectus. Architecto odit ut fugiat explicabo, animi omnis eius
        recusandae expedita quidem ipsum sapiente vitae et doloremque molestiae
        pariatur natus quaerat?
      </p>
      <p>
        Lorem ipsum dilor sit amet consectetur adipisicing elit. Earum,
        delectus. Architecto odit ut fugiat explicabo, animi omnis eius
        recusandae expedita quidem ipsum sapiente vitae et doloremque molestiae
        pariatur natus quaerat?
      </p>
      <p>
        Lorem ipsum dilor sit amet consectetur adipisicing elit. Earum,
        delectus. Architecto odit ut fugiat explicabo, animi omnis eius
        recusandae expedita quidem ipsum sapiente vitae et doloremque molestiae
        pariatur natus quaerat?
      </p>
      <p>
        Lorem ipsum dilor sit amet consectetur adipisicing elit. Earum,
        delectus. Architecto odit ut fugiat explicabo, animi omnis eius
        recusandae expedita quidem ipsum sapiente vitae et doloremque molestiae
        pariatur natus quaerat?
      </p>
    </div>
  );
};

export default App;
