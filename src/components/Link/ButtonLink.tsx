import React from 'react';
import clsx from 'clsx';
import { buttonBases, buttonStyles, buttonSizes, type Variant, type Color, type Size, type Icon } from '#styles/buttonStyles';

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string | number;
	variant: Variant;
	color: Exclude<Color, 'disabled'>;
	size?: Size;
	icon?: React.ReactNode;
	iconPosition?: 'left' | 'right';
	iconOnly?: boolean;
}

export function ButtonLink({
	label,
	variant,
	color,
	size = 'medium',
	icon,
	iconPosition = 'left',
	iconOnly = false,
	className,
	...props
}: ButtonLinkProps) {
	const iconType = `icon-${!icon ? 'none' : iconOnly ? 'only' : iconPosition}` satisfies Icon;
	const classList = clsx([
		'inline-flex cursor-pointer',
		buttonBases,
		iconPosition === 'right'
			? 'flex-row-reverse'
			: 'flex-row',
		buttonStyles[variant][color],
		buttonSizes[size][iconType],
		size === 'big' || size === 'medium'
			? 'rounded-lg'
			: 'rounded',
		className,
	]);

	return (
		<a
			className={classList}
			role='link'
			tabIndex={0}
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
		</a>
	);
}