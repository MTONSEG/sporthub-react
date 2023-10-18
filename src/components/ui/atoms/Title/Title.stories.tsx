import { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta: Meta<typeof Title> = {
	title: 'ui/atoms/Title',
	component: Title,
	tags: ['autodocs'],
	args: {
		text: 'Example title'
	},
	argTypes: {

	}
} satisfies Meta<typeof Title>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
