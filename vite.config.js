import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'css/main.scss'
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'css/[name].min[extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    },
    cssMinify: true,
  }
});
