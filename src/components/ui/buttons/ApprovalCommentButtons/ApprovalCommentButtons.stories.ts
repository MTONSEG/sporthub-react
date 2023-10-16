import { Meta, StoryObj } from '@storybook/react';
import ApprovalCommentButtons from './ApprovalCommentButtons';

const meta: Meta<typeof ApprovalCommentButtons> = {
	title: 'ui/buttons/ApprovalCommentButtons',
	component: ApprovalCommentButtons,
	tags: ['autodocs'],
	args: {
		like: 23,
		dislike: -45
	},
	argTypes: {

	}
} satisfies Meta<typeof ApprovalCommentButtons>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
