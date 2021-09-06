import typescript from 'rollup-plugin-typescript2';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import postcss from "rollup-plugin-postcss";

const input = 'src/index.ts';
const outputName = 'index';
const formats = ['cjs', 'esm', 'umd'];

export default formats.map((format) => {
  return {
    input,
    output: {
      file: 'dist/' + [outputName, format, 'js'].join('.'),
      format: format,
      name: 'ReactPagination',
      sourcemap: true,
      globals: { react: 'React' },
      exports: 'named',
    },

    plugins: [
      typescript({
        typescript: require('typescript'),
      }),
      format === 'umd' &&
        commonjs({
          include: /\/node_modules\//,
        }),
      postcss({
        modules: true,
        config: {
          path: '../postcss.config.js'
        }
      }),
      sourcemaps(),
      format !== 'esm' &&
        terser({
          output: { comments: false },
          compress: {
            drop_console: true,
          },
        }),
    ].filter(Boolean),

    external: ['react', 'react-dom'],
  };
});