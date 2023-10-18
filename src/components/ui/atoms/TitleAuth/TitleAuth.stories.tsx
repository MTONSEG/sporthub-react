import { Meta, StoryObj } from '@storybook/react';
import TitleAuth from './TitleAuth';

const meta: Meta<typeof TitleAuth> = {
	title: 'ui/atoms/TitleAuth',
	component: TitleAuth,
	tags: ['autodocs'],
	args: {
		title:'Example title'
	},
	argTypes: {

	}
} satisfies Meta<typeof TitleAuth>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
