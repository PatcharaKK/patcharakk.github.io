import { defineConfig } from "oxfmt";

const config = defineConfig({
	sortImports: true,
	sortPackageJson: false,
	sortTailwindcss: true,
	astro: true,
	tabWidth: 4,
	useTabs: true,
	overrides: [
		{
			files: ["*.yaml"],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
});

export default config;
