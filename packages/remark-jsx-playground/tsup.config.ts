import { defineConfig } from 'tsup';

export default defineConfig({
  name: 'remark-jsx-playground',
  entry: ['src/index.ts'],
  format: 'esm',
  dts: true,
});
