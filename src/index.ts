/* eslint-disable func-names */
import plugin from "tailwindcss/plugin.js";

export default plugin(function center({ addUtilities }) {
	addUtilities({
		".center-flex": {
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		},
		".center-flex-x": {
			display: "flex",
			justifyContent: "center",
		},
		".center-flex-y": {
			display: "flex",
			alignItems: "center",
		},
		".center-grid": {
			display: "grid",
			placeItems: "center",
		},
		".center-grid-x": {
			display: "grid",
			justifyItems: "center",
		},
		".center-grid-y": {
			display: "grid",
			alignItems: "center",
		},
		".center-absolute": {
			position: "absolute",
			left: "50%",
			top: "50%",
			transform: "translate(-50%, -50%)",
		},
		".center-absolute-x": {
			position: "absolute",
			left: "50%",
			transform: "translateX(-50%)",
		},
		".center-absolute-y": {
			position: "absolute",
			top: "50%",
			transform: "translateY(-50%)",
		},
		".center-margin": {
			margin: "auto",
		},
		".center-margin-x": {
			marginInline: "auto",
		},
		".center-margin-y": {
			marginBlock: "auto",
		},
	});
});
