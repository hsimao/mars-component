import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { name } from '../package.json'
const file = type => `dist/${name}.${type}.js`

const overrides = {
  compilerOptions: { declaration: true },
  exclude: ['node_modules', 'src/App.vue', 'src/main.ts']
}

export { name, file }
export default {
  input: 'src/index.ts',
  output: {
    name,
    file: file('esm'),
    format: 'es'
  },
  plugins: [
    terser(),
    nodeResolve(),
    typescript({ tsconfigOverride: overrides }),
    vue(),
    css({
      output: 'dist/bundle.css'
    })
  ],
  external: ['vue', 'loadsh-es']
}
