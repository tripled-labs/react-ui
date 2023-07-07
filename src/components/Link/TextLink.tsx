import React from 'react';
import clsx from 'clsx';

export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	label: string | number;
	url: string;
	newTabIcon?: React.ReactNode;
}

export function TextLink({ label, url, newTabIcon, target, className, ...props }: TextLinkProps) {
	const classList = clsx([
		'no-underline hover:underline decoration-2 underline-offset-2',
		'text-blue-600 dark:text-blue-500',
		className,
	]);

	return (
		<a
			href={url}
			className={classList}
			target={target}
			{...props}
		>
			<span>
				{label}
			</span>
			{newTabIcon && target === '_blank' ? (
				<span>
					{newTabIcon}
				</span>
			) : false}
		</a>
	);
}
