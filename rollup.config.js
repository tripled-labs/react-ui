import { defineConfig } from 'rollup';
import packageJson from './package.json' assert { type: 'json' };

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExt from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

export default defineConfig([
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.main,
				format: 'cjs',
				sourcemap: true,
			},
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExt(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: './tsconfig.json',
				include: [
					'src/**/*.{ts,tsx}',
				],
				exclude: [
					'stories',
					'tests',
				],
			}),
			postcss({
				config: {
					path: './postcss.config.js',
				},
				extensions: [
					'.css',
				],
				minimize: true,
				extract: 'tailwind.css',
			}),
			terser(),
		],
		external: [
			'react-dom',
		],
	},
	{
		input: 'dist/types/index.d.ts',
		output: {
			file: packageJson.types,
			format: 'esm',
		},
		plugins: [
			dts({
				compilerOptions: {
					paths: packageJson.imports,
				},
			}),
		],
		external: [
			/\.css$/,
		],
	},
]);