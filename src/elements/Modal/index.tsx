import { FC, PropsWithChildren, useMemo } from "react";
import Portal from "../Portal";
import { modalContainer, modalContent, modalMask } from "./style";
import { CSS } from "@stitches/core";

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

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  open,
  onClose,
  uiProps,
  kind = "default",
}) => {
  const { container, content, mask } = uiProps || {};
  const { currentContainer, currentContent } = useMemo(() => {
    const kindMap = {
      left: {
        container: {
          justifyContent: "start",
        },
        content(value: boolean) {
          return value
            ? {
                transitionProperty: "visibility, transform",
                transitionDuration: "0s, 0.5s",
                transform: "translateX(0)",

                height: "calc(100vh - 40px)",
                padding: 20,
                borderRadius: 0,
              }
            : {
                transform: "translateX(-100%)",
                visibility: "hidden",
                transitionDelay: "0s, 0.5s",
                transitionDuration: "0.5s, 0s",
                transitionProperty: "transform, visibility",
                // to overwrite existing opacity 0
                opacity: 1,
                height: "calc(100vh - 40px)",
                padding: 20,
                borderRadius: 0,
              };
        },
      },
      right: {
        container: {
          justifyContent: "end",
        },
        content(value: boolean) {
          return value
            ? {
                transitionProperty: "visibility, transform",
                transitionDuration: "0s, 0.5s",
                transform: "translateX(0)",

                height: "calc(100vh - 40px)",
                padding: 20,
                borderRadius: 0,
              }
            : {
                transform: "translateX(100%)",
                visibility: "hidden",
                transitionDelay: "0s, 0.5s",
                transitionDuration: "0.5s, 0s",
                transitionProperty: "transform, visibility",
                // to overwrite existing opacity 0
                opacity: 1,
                height: "calc(100vh - 40px)",
                padding: 20,
                borderRadius: 0,
              };
        },
      },
      default: {
        container: {},
        content() {
          return {};
        },
      },
    };
    const currentKind = kindMap[kind as keyof typeof kindMap];
    const currentContainer =
      "container" in currentKind ? currentKind.container : {};
    const currentContent = currentKind.content(open) || {};

    return { currentContainer, currentContent };
  }, [kind, open]);

  return (
    <Portal>
      <div
        className={modalContainer({
          css: { ...container, ...currentContainer },
        })}
      >
        <div
          className={modalContent({
            open,
            css: { ...content, ...currentContent },
          })}
        >
          {children}
        </div>
        <div
          onClick={() => onClose?.(false)}
          className={modalMask({ open, css: mask })}
        ></div>
      </div>
    </Portal>
  );
};

export * from "./style";

export default Modal;
