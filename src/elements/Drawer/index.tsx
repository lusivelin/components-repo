import { ReactElement, useState } from "react";
import Modal from "../Modal";
import { button } from "../Button/style";

export type DrawerProps = {
    open: boolean;
    onClose: (value: boolean) => void;
    uiProps?: {
        
    }
}

const Drawer = ({
	kind = "right",
    children
}: {
	kind?: "left" | "right" | "bottom" | "up";
    children?: ReactElement
}) => {
	const [open, setOpen] = useState(false);
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
		bottom: {
			container: {
				justifyContent: "start",
			},
			content(value: boolean) {
				return value
					? {
							transitionProperty: "visibility, transform",
							transitionDuration: "0s, 0.5s",
							transform: "translateY(0)",

							width: "100%",
							height: "400px",
							padding: 0,
					  }
					: {
							transform: "translateY(100%)",
							visibility: "hidden",
							transitionDelay: "0s, 0.5s",
							transitionDuration: "0.5s, 0s",
							transitionProperty: "transform, visibility",

							width: "100%",
                            // height: "0",
                            height: "400px",
							padding: 0,

							// to overwrite existing opacity 0
							opacity: 1,
					  };
			},
		},
		up: {
			container: {
				justifyContent: "start",
			},
			content() {},
		},
	};
	const currentKind = kindMap[kind as keyof typeof kindMap];
	const currentContainer =
		"container" in currentKind ? currentKind.container : {};
	const currentContent = currentKind.content(open) || {};

	return (
		<>
			<button
				className={button({
					css: {
						background: "$citron",
					},
				})}
				onClick={() => {
					setOpen(!open);
				}}
			>
				Me Drawer
			</button>
			<Modal
				uiProps={{
					content: currentContent,
					container: currentContainer,
				}}
				open={open}
				onClose={(value) => setOpen(value)}
			>
                {children}
			</Modal>
		</>
	);
};

export default Drawer;
