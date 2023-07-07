export type Variant = 'filled' | 'outlined' | 'text-only';
export type Color = 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'disabled';
export type Size = 'big' | 'medium' | 'small';
export type Icon = 'icon-none' | 'icon-left' | 'icon-right' | 'icon-only';

export type ButtonStyleOptions = {
	[variantKey in Variant]: {
		[colorKey in Color]: string;
	};
}

export type ButtonSizeOptions = {
	[sizeKey in Size]: {
		[iconKey in Icon]: string;
	};
}

export const buttonBases = 'justify-center items-center font-medium border motion-safe:transition-all motion-safe:duration-200';

export const buttonStyles: ButtonStyleOptions = {
	'filled': {
		primary: 'bg-blue-600 text-slate-50 border-blue-600 hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 active:border-blue-800 dark:bg-blue-500 dark:border-blue-500 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:active:bg-blue-700 dark:active:border-blue-700',
		secondary: 'bg-pink-600 text-slate-50 border-pink-600 hover:bg-pink-700 hover:border-pink-700 active:bg-pink-800 active:border-pink-800 dark:bg-pink-500 dark:border-pink-500 dark:hover:bg-pink-600 dark:hover:border-pink-600 dark:active:bg-pink-700 dark:active:border-pink-700',
		info: 'bg-sky-600 text-slate-50 border-sky-600 hover:bg-sky-700 hover:border-sky-700 active:bg-sky-800 active:border-sky-800 dark:bg-sky-500 dark:border-sky-500 dark:hover:bg-sky-600 dark:hover:border-sky-600 dark:active:bg-sky-700 dark:active:border-sky-700',
		success: 'bg-emerald-600 text-slate-50 border-emerald-600 hover:bg-emerald-700 hover:border-emerald-700 active:bg-emerald-800 active:border-emerald-800 dark:bg-emerald-500 dark:border-emerald-500 dark:hover:bg-emerald-600 dark:hover:border-emerald-600 dark:active:bg-emerald-700 dark:active:border-emerald-700',
		warning: 'bg-yellow-400 text-slate-950 border-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 active:bg-yellow-600 active:border-yellow-600 dark:bg-yellow-300 dark:border-yellow-300 dark:hover:bg-yellow-400 dark:hover:border-yellow-400 dark:active:bg-yellow-500 dark:active:border-yellow-500',
		danger: 'bg-red-600 text-slate-50 border-red-600 hover:bg-red-700 hover:border-red-700 active:bg-red-800 active:border-red-800 dark:bg-red-500 dark:border-red-500 dark:hover:bg-red-600 dark:hover:border-red-600 dark:active:bg-red-700 dark:active:border-red-700',
		disabled: 'bg-slate-400 text-slate-600 border-slate-400 dark:bg-slate-600 dark:text-slate-400 dark:border-slate-600',
	},
	'outlined': {
		primary: 'text-blue-600 border-slate-400 hover:text-blue-700 hover:bg-blue-200 hover:border-blue-600 active:text-blue-800 active:bg-blue-300 dark:text-blue-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-blue-500 dark:active:bg-slate-900',
		secondary: 'text-pink-600 border-slate-400 hover:text-pink-700 hover:bg-pink-200 hover:border-pink-600 active:text-pink-800 active:bg-pink-300 dark:text-pink-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-pink-500 dark:active:bg-slate-900',
		info: 'text-sky-600 border-slate-400 hover:text-sky-700 hover:bg-sky-200 hover:border-sky-600 active:text-sky-800 active:bg-sky-300 dark:text-sky-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-sky-500 dark:active:bg-slate-900',
		success: 'text-emerald-600 border-slate-400 hover:text-emerald-700 hover:bg-emerald-200 hover:border-emerald-600 active:text-emerald-800 active:bg-emerald-300 dark:text-emerald-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-emerald-500 dark:active:bg-slate-900',
		warning: 'text-yellow-600 border-slate-400 hover:text-yellow-700 hover:bg-yellow-100 hover:border-yellow-600 active:text-yellow-800 active:bg-yellow-200 dark:text-yellow-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-yellow-500 dark:active:bg-slate-900',
		danger: 'text-red-600 border-slate-400 hover:text-red-700 hover:bg-red-200 hover:border-red-600 active:text-red-800 active:bg-red-300 dark:text-red-500 dark:border-slate-700 dark:hover:bg-slate-800 dark:hover:border-red-500 dark:active:bg-slate-900',
		disabled: 'bg-slate-300 text-slate-700 border-slate-500 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-600',
	},
	'text-only': {
		primary: 'text-blue-600 border-transparent hover:text-blue-700 hover:bg-blue-200 active:text-blue-800 active:bg-blue-300 dark:text-blue-500 dark:hover:bg-slate-800 dark:active:bg-slate-900',
		secondary: 'text-pink-600 border-transparent hover:text-pink-700 hover:bg-pink-200 active:text-pink-800 active:bg-pink-300 dark:text-pink-500 dark:hover:bg-slate-800 dark:active:bg-slate-900',
		info: 'text-sky-600 border-transparent hover:text-sky-700 hover:bg-sky-200 active:text-sky-800 active:bg-sky-300 dark:text-sky-500 dark:hover:bg-slate-800 dark:active:bg-slate-900',
		success: 'text-emerald-600 border-transparent hover:text-emerald-700 hover:bg-emerald-200 active:text-emerald-800 active:bg-emerald-300 dark:text-emerald-500 dark:hover:bg-slate-800 dark:active:bg-slate-900',
		warning: 'text-yellow-600 border-transparent hover:text-yellow-700 hover:bg-yellow-100 active:text-yellow-800 active:bg-yellow-200 dark:text-yellow-500 dark:hover:bg-slate-800 dark:active:bg-slate-900',
		danger: 'text-red-600 border-transparent hover:text-red-700 hover:bg-red-200 active:text-red-800 active:bg-red-300 dark:text-red-500 dark:hover:bg-slate-800 dark:active:bg-slate-900',
		disabled: 'bg-slate-300 text-slate-700 border-transparent dark:bg-slate-800 dark:text-slate-400',
	},
};

export const buttonSizes: ButtonSizeOptions = {
	big: {
		'icon-none': 'px-6 py-3',
		'icon-left': 'py-3 pl-2 pr-3',
		'icon-right': 'py-3 pl-3 pr-2',
		'icon-only': 'p-3',
	},
	medium: {
		'icon-none': 'px-4 py-2',
		'icon-left': 'py-2 pl-1 pr-2',
		'icon-right': 'py-2 pl-2 pr-1',
		'icon-only': 'p-2',
	},
	small: {
		'icon-none': 'px-2 py-1',
		'icon-left': 'py-1 pl-0.5 pr-1',
		'icon-right': 'py-1 pl-1 pr-0.5',
		'icon-only': 'p-1',
	},
};
