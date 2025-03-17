// vite.config.ts
import { defineConfig } from 'vite'     //导入vite
import vue from '@vitejs/plugin-vue'     //导入vue
import path from 'path'                 //导入path
import AutoImport from 'unplugin-auto-import/vite'  //导入unplugin-auto-import
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue', 'vue-router'],
            dts: true,
        }),
        Components({
            resolvers: [
                AntDesignVueResolver({importStyle: false}),
            ],
        }),
    ],
    // 别名
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    //全局scss
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
                @use "@/style/variable.scss" as *;
            `,
            },
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    }
})
