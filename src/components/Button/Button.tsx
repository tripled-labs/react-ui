import React from 'react';
import clsx from 'clsx';
import { buttonBases, buttonStyles, buttonSizes, type Variant, type Color, type Size, type Icon } from '#styles/buttonStyles';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	label: string | number;
	variant: Variant;
	color: Exclude<Color, 'disabled'>;
	size?: Size;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	iconOnly?: boolean;
}

export function Button({
	label,
	variant,
	color,
	size = 'medium',
	icon,
	iconPosition = 'left',
	iconOnly = false,
	className,
	disabled,
	...props
}: ButtonProps) {
	const iconType = `icon-${!icon ? 'none' : iconOnly ? 'only' : iconPosition}` satisfies Icon;
	const classList = clsx([
		'flex',
		buttonBases,
		iconPosition === 'right'
			? 'flex-row-reverse'
			: 'flex-row',
		!disabled
			? buttonStyles[variant][color]
			: buttonStyles[variant].disabled,
		disabled
			? 'cursor-default'
			: 'cursor-pointer',
		buttonSizes[size][iconType],
		size === 'big' || size === 'medium'
			? 'rounded-lg'
			: 'rounded',
		className,
	]);

	return (
		<button
			className={classList}
			{...props}
		>
			{icon ? (
				<span>
					{icon}
				</span>
			) : false}
			{iconOnly ? (
				<span className='sr-only'>
					{label}
				</span>
			) : (
				<span>
					{label}
				</span>
			)}
		</button>
	);
}