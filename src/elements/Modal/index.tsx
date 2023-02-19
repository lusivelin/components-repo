import {
  FC,
  PropsWithChildren,
  ReactNode,
} from "react";
import Portal from "../../component/Portal";
import {
  crossIcon,
  modalContainer,
  modalContent,
  modalContentHeader,
  modalMask,
  modalContentBody,
} from "./style";
import { CrossIcon } from "../Icon";

export type ModalProps = {
  open: boolean;
  onClose: (value: boolean) => void;
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  open,
  onClose,
}) => {
  const result: ReactNode = (
    <>
      <header className={modalContentHeader()}>
        <h3>Hello This is title</h3>
        <CrossIcon onClick={() => onClose(false)} className={crossIcon()} />
      </header>
      <main className={modalContentBody()}>
        <div>Description bla bla bla</div>
      </main>
    </>
  );
  return (
    <div>
      <button
        onClick={() => {
          onClose(!open);
        }}
      >
        switch
      </button>
      <Portal>
        <div className={modalContainer({ open })}>
          <div className={modalContent({ open })}>{children || result}</div>
          <div onClick={() => onClose(false)} className={modalMask()}></div>
        </div>
      </Portal>
    </div>
  );
};

export default Modal;
