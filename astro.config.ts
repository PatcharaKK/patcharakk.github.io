import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

const config = defineConfig({
	site: "https://patcharakk.github.io",
	vite: {
		plugins: [tailwindcss()],
	},
});

export default config;
