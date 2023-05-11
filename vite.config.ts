import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import react from '@vitejs/plugin-react-swc'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), viteSingleFile({ inlinePattern: [ "**/*.css" ] })],
})
