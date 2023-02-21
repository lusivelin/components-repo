import { useState } from "react";
import Modal from "./elements/Modal";
import { globalStyles } from "./stitches.config";
import { button } from "./elements/Button/style";
import Drawer from "./elements/Drawer";

function App() {
	globalStyles();

	const [open, setOpen] = useState(false);
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
				<Drawer kind="right" />
				<Modal open={open} onClose={(value) => setOpen(value)} />

				<button
					className={button({
						css: {
							background: "$platinum",
							color: "$text-black",
						},
					})}
					onClick={() => {
						setOpen(!open);
					}}
				>
					Add Me
				</button>
				<button
					className={button({
						css: {
							background: "$ghost-white",
							color: "$text-black",
						},
					})}
					onClick={() => {
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
					}}
				>
					Add Me
				</button>
				<button
					className={button({
						css: {
							background: "$oxford-blue",
						},
					})}
					onClick={() => {
						setOpen(!open);
					}}
				>
					Add Me
				</button>
				<button
					className={button({
						css: {
							background: "$dodger-blue",
						},
					})}
					onClick={() => {
						setOpen(!open);
					}}
				>
					Add Me
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
					Add Me
				</button>
				<button
					className={button({
						css: {
							background: "$sky-blue",
						},
					})}
					onClick={() => {
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
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
						setOpen(!open);
					}}
				>
					Add Me
				</button>
			</div>
		</div>
	);
}

export default App;
