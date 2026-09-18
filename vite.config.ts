import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { varlockVitePlugin } from "@varlock/vite-integration";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	plugins: [
		varlockVitePlugin(),
		devtools(),
		nitro(),
		tailwindcss(),
		tanstackStart(),
		viteReact(),
	],
});

export default config;
