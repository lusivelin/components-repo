import { useState } from "react";
import { accordionBody, accordionContainer, accordionControl } from "./style";

const Accordion = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={accordionContainer()}>
      <button className={accordionControl()} onClick={() => setOpen(!open)}>
        Me Accordion
      </button>
      <article className={accordionBody({ open })}>
        <h1>This is dummy data</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde fugit,
          consequatur delectus nesciunt tempore earum ducimus temporibus animi
          deleniti voluptatum dignissimos esse accusantium vero, ex odit officia
          ad? Aliquam, eum.
        </p>
      </article>
    </div>
  );
};

export default Accordion;
