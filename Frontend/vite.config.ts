import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// Allow using process.env without adding @types/node
declare const process: any;

// https://vitejs.dev/config/
// For GitHub Pages (project site https://<user>.github.io/IA03/),
// we must set base to "/IA03/". We do it conditionally when GITHUB_PAGES=true
// so local dev and other hosts (Render) still use base "/".
export default defineConfig(() => {
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  const base = isGitHubPages ? '/IA03/' : '/';
  return {
    base,
    plugins: [react()],
  };
});
