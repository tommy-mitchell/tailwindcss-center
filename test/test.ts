import { fileURLToPath } from "node:url";
import test from "ava";
import tailwind from "tailwindcss";
import postcss, { type AcceptedPlugin } from "postcss";
import tailwindPluginCenter from "../src/index.js";

const __filename = fileURLToPath(import.meta.url);

const validate = test.macro(async (t, input: string) => {
	const output = await postcss([
		tailwind({
			content: [{ raw: input }],
			plugins: [tailwindPluginCenter],
		}) as AcceptedPlugin,
	]).process("@tailwind utilities", {
		from: `${__filename}?test=${t.title}`,
	});

	t.snapshot(output.css);
	t.log(output.css);
});

const utilities = [
	".center-flex",
	".center-flex-x",
	".center-flex-y",
	".center-grid",
	".center-grid-x",
	".center-grid-y",
	".center-absolute",
	".center-absolute-x",
	".center-absolute-y",
	".center-margin",
	".center-margin-x",
	".center-margin-y",
] as const;

for (const utility of utilities) {
	test(`utility: ${utility}`, validate, utility);
}
