import { Meta, StoryObj } from '@storybook/react';
import CommentButton from './CommentButton';


const meta: Meta<typeof CommentButton> = {
	title: 'ui/buttons/CommentButton',
	component: CommentButton,
	tags: ['autodocs'],
	args: {
		title: 198
	},
	argTypes: {

	}
} satisfies Meta<typeof CommentButton>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	
};
