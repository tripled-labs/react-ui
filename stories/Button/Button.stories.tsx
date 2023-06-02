import { Meta, StoryObj } from '@storybook/react';
import { Button } from '#components/Button';

const meta = {
	title: 'Button/Button',
	component: Button,
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Filled: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'primary',
	},
};

export const Outlined: Story = {
	args: {
		label: 'Button',
		variant: 'outlined',
		color: 'primary',
	},
};

export const TextOnly: Story = {
	args: {
		label: 'Button',
		variant: 'text-only',
		color: 'primary',
	},
};

export const Big: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'primary',
		size: 'big',
	},
};

export const Medium: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'primary',
		size: 'medium',
	},
};

export const Small: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'primary',
		size: 'small',
	},
};

export const Primary: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'secondary',
	},
};

export const Info: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'info',
	},
};

export const Success: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'success',
	},
};

export const Warning: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'warning',
	},
};

export const Danger: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'danger',
	},
};

export const Disabled: Story = {
	args: {
		label: 'Button',
		variant: 'filled',
		color: 'primary',
		disabled: true,
	},
};
