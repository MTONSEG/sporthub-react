import { Meta, StoryObj } from '@storybook/react';
import OptionButton from './OptionButton';

const meta: Meta<typeof OptionButton> = {
	title: 'ui/buttons/OptionButton',
	component: OptionButton,
	tags: ['autodocs'],
	args: {
		
	},
	argTypes: {

	}
} satisfies Meta<typeof OptionButton>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
