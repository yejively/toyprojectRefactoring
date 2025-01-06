import * as path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import eslint from 'vite-plugin-eslint';
import checker from 'vite-plugin-checker';

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
            fastRefresh: true,
        }),
        eslint({
            failOnError: false,
            failOnWarning: false,
            emitError: true,
            emitWarning: true,
            fix: true,
            cache: true,
            include: ['./src/**/*.js', './src/**/*.jsx'],
        }),
        checker({
            eslint: {
                lintCommand: 'eslint "./src/**/*.{js,jsx}"',
                dev: {
                    logLevel: ['error', 'warning'],
                },
            },
        }),
        vanillaExtractPlugin(),
    ],
    worker: {
        format: 'es',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.ts', '.tsx', '.jsx', '.css', '.scss', '.css.js'],
    },
});
