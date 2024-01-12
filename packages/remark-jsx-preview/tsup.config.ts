import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'remark-jsx-preview',
  entry: ['src/index.ts'],
  format: 'esm',
  dts: true,
});
