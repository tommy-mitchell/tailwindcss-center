# tailwindcss-center

A TailwindCSS plugin that adds centering utilities.

> [!WARNING]
> This plugin is ESM only.

## Install

```sh
npm install --save-dev tailwindcss-center
```

<details>
<summary>Other Package Managers</summary>

```sh
yarn add --dev tailwindcss-center
```

</details>

Add the plugin to your Tailwind config:

```ts
import tailwindPluginCenter from "tailwindcss-center";

export default {
	theme: {
		// ...
	},
	plugins: [
		tailwindPluginCenter,
	],
};
```

## Usage

Utilities are provided for centering with Flexbox, CSS Grid, absolute positioning, and auto margins:

```html
<div class="center-flex">
	<!-- ... -->
</div>
```

Centering can also be applied individually to a specific axis:

```html
<div class="center-flex-x">
	<!-- ... -->
</div>

<div class="center-flex-y">
	<!-- ... -->
</div>
```

### Provided Utilities

#### Flex

- `center-flex`
- `center-flex-x`
- `center-flex-y`

#### Grid

- `center-grid`
- `center-grid-x`
- `center-grid-y`

#### Absolute

- `center-absolute`
- `center-absolute-x`
- `center-absolute-y`

#### Margin

- `center-margin`
- `center-margin-x`
- `center-margin-y`

## Related

- [@marcoguidara/tailwind-quick-center](https://github.com/marcoguidara/tailwindcss-quick-center) - A plugin that provides utilities for centering an element on x/y axis.
