import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/objects/*.{obj,mtl}',
          dest: 'assets/objects'
        },
        {
          src: 'src/assets/textures/*.{jpg,png}',
          dest: 'assets/textures'
        }
      ]
    })
  ],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split('.').pop()?.toLowerCase() || 'assets';
          const folderMap: Record<string, string> = {
            obj: 'models',
            mtl: 'models',
            jpg: 'textures',
            png: 'textures'
          };
          return `assets/${folderMap[extType] || extType}/[name]-[hash][extname]`;
        }
      }
    }
  },
  assetsInclude: ['**/*.obj', '**/*.mtl'] // This is valid in Vite 3+
});