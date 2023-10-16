import { Meta, StoryObj } from '@storybook/react';
import ApprovalButtons from './ApprovalButtons';

const meta: Meta<typeof ApprovalButtons> = {
	title: 'ui/buttons/ApprovalButtons',
	component: ApprovalButtons,
	tags: ['autodocs'],
	args: {
		amountDislike: -12,
		amountLike: 432
	},
	argTypes: {

	}
} satisfies Meta<typeof ApprovalButtons>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
