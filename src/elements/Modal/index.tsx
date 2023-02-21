import { FC, PropsWithChildren, ReactNode } from "react";
import Portal from "../Portal";
import {
	crossIcon,
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
				<CrossIcon
					onClick={() => onClose(false)}
					className={crossIcon()}
				/>
			</header>
			<main className={modalContentBody()}>
				<div>Description Here</div>
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
				<div className={modalContainer({ open, css: container })}>
					<div className={modalContent({ css: content })}>
						{children || result}
					</div>
					<div
						onClick={() => onClose(false)}
						className={modalMask({ css: mask })}
					></div>
				</div>
			</Portal>
		</div>
	);
};

export default Modal;
