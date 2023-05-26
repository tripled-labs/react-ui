import { defineConfig } from 'rollup';
import packageJson from './package.json' assert { type: 'json' };

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import peerDepsExt from 'rollup-plugin-peer-deps-external';

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
					'src',
				],
				exclude: [
					'stories',
					'tests',
				],
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
			dts(),
		],
		external: [
			/\.css$/,
		],
	},
]);