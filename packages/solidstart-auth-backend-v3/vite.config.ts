import {defineConfig} from 'vite'
import {resolve} from 'path'
// import {extname, relative, resolve} from 'path'
// import {fileURLToPath} from 'node:url'
// import {glob} from 'glob'
import {libInjectCss} from 'vite-plugin-lib-inject-css'

import solid from 'vite-plugin-solid'
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [solid(), libInjectCss(), dts()],
    build: {
        copyPublicDir: false,
        lib: {
            name: 'solidstart-auth-backend-v3',
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'cjs'],
            fileName: (format) => `solidstart-auth-backend-v3.${format}.js`,
        },
        rollupOptions: {
            external: ['solid-js', 'solid-start'],
            // input: Object.fromEntries(
            //     glob.sync('src/**/*.{ts,tsx}', {
            //         ignore: ['src/**/*.d.ts'],
            //     }).map(file => [
            //         // The name of the entry point
            //         // src/nested/foo.ts becomes nested/foo
            //         relative(
            //             'src',
            //             file.slice(0, file.length - extname(file).length)
            //         ),
            //         // The absolute path to the entry file
            //         // src/nested/foo.ts becomes /project/src/nested/foo.ts
            //         fileURLToPath(new URL(file, import.meta.url))
            //     ])
            // ),
            // output: {
            //     assetFileNames: 'assets/[name][extname]',
            //     entryFileNames: '[name].js',
            // }
        }
    }
})
