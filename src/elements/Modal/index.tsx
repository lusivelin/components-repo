import { FC, PropsWithChildren, ReactNode } from "react";
import Portal from "../Portal";
import {
	// crossIcon,
	modalContainer,
	modalContent,
	modalContentHeader,
	modalMask,
	modalContentBody,
} from "./style";
import { CrossIcon } from "../Icon";
import { CSS } from "@stitches/core";

export type ModalProps = {
	open: boolean;
	onClose: (value: boolean) => void;
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
}) => {
	const { container, content, mask } = uiProps || {};
	const result: ReactNode = (
		<>
			<header className={modalContentHeader()}>
				<h3>Hello This is title</h3>
                <span onClick={() => onClose(false)}>X</span>
			</header>
			<main className={modalContentBody()}>
				<div>Description Here</div>
			</main>
		</>
	);
	return (
		<div>
			<Portal>
				<div className={modalContainer({ css: container })}>
					<div className={modalContent({ open, css: content })}>
						{children || result}
					</div>
					<div
						onClick={() => onClose(false)}
						className={modalMask({ open, css: mask })}
					></div>
				</div>
			</Portal>
		</div>
	);
};

export default Modal;
