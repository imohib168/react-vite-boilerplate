import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import jsconfigPaths from 'vite-jsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [react(), eslintPlugin(), jsconfigPaths()],
  resolve: { alias: { '@': new URL('./src', import.meta.url).pathname } },
});
