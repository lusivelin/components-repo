import { useState } from "react";
import Modal from "../Modal";
import { button } from "../Button/style";
import { modalContentBody, modalContentHeader } from "../Modal/style";
import { drawerContentBody, drawerContentHeader } from "./style";

const Drawer = ({
	kind = "right",
}: {
	kind?: "left" | "right" | "bottom" | "up";
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
							transform: "translateY(-150%)",

							width: "100%",
							height: "1200px",
							padding: 0,
					  }
					: {
							transform: "translateY(100%)",
							visibility: "hidden",
							transitionDelay: "0s, 0.5s",
							transitionDuration: "0.5s, 0s",
							transitionProperty: "transform, visibility",

							width: "100%",
                            height: "1200px",
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
				<header className={drawerContentHeader()}>
					<h3>Hello This is title</h3>
					<span onClick={() => setOpen(false)}>X</span>
				</header>
				<main className={drawerContentBody()}>
					<div>Description Here</div>
					<p>
						Hello Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. A, aliquid totam! Officiis nobis
						rerum, esse aliquid alias mollitia nihil maiores sed
						corrupti minus quas, voluptates quo quae non explicabo.
						Odio.
					</p>
				</main>
			</Modal>
		</>
	);
};

export default Drawer;
