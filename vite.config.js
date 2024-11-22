import { defineConfig } from 'vite';
import { readFileSync } from 'fs';
import path from 'path';
import rtlcss from 'rtlcss';
import postcssRTLCSS from 'postcss-rtlcss';

const pkg = JSON.parse(readFileSync('./package.json', 'utf8'));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'css/main.scss',
        rtl: 'css/main.scss'
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith('.css')) {
            return 'css/[name].min[extname]';
          }
          return 'assets/[name][extname]';
        }
      }
    },
    cssMinify: true,
  },
  css: {
    postcss: {
      plugins: [
        postcssRTLCSS()
      ]
    }
  }
});
