import { Meta, StoryObj } from '@storybook/react';
import { TextLink } from '#components/Link';

const meta = {
	title: 'Link/Text Link',
	component: TextLink,
	tags: ['autodocs'],
} satisfies Meta<typeof TextLink>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
	args: {
		label: 'A link',
		url: '#',
	},
};

export const WithIcon: Story = {
	args: {
		label: 'A link',
		url: '#',
		target: '_blank',
		newTabIcon: 'X',
	},
};