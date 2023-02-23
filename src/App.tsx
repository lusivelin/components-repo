import { useState } from "react";
import Modal from "./elements/Modal";
import { globalStyles } from "./stitches.config";
import { button } from "./elements/Button/style";
import { modalContentBody, modalContentHeader } from "./elements/Modal/style";

function App() {
	globalStyles();

	const [open, setOpen] = useState(false);
    const [openRight, setOpenRight] = useState(false);
    const [openLeft, setOpenLeft] = useState(false);
	return (
		<div className="App">
			<div
				style={{
					display: "flex",
					gap: 10,
					margin: 40,
					flexWrap: "wrap",
				}}
			>
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
					open={open}
					onClose={(value) => setOpen(value)}
				>
					<header className={modalContentHeader()}>
						<h3>Hello This is title</h3>
						<span onClick={() => setOpen(false)}>X</span>
					</header>
					<main className={modalContentBody()}>
						<div>Description Here</div>
					</main>
				</Modal>

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

				<div
					style={{
						display: "flex",
						gap: 10,
						margin: 40,
						flexWrap: "wrap",
					}}
				>
					<button
						className={button({
							css: {
								background: "$platinum",
								color: "$text-black",
							},
						})}
						onClick={() => {
						}}
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
						onClick={() => {
						}}
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
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$tomato",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$crimson",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>

					<button
						className={button({
							css: {
								background: "$sky-blue",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$space-cadet",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$jungle-green",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$earth-yellow",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$light-orange",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$steel-pink",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$air-force-blue",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$beaver",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$buff",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
					<button
						className={button({
							css: {
								background: "$citron",
							},
						})}
						onClick={() => {
						}}
					>
						Add Me
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
