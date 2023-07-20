import { defineConfig } from 'vitest/config';

export default defineConfig({
	test: {
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'clover', 'lcov'],
		},
		environment: 'jsdom',
		globals: true,
		setupFiles: 'tests/setup.ts',
	},
	esbuild: {
		target: 'es2022',
	},
});