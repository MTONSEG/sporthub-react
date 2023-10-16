import { Meta, StoryObj } from '@storybook/react';
import { ButtonPopup } from './ButtonPopup';

const meta: Meta<typeof ButtonPopup> = {
	title: 'ui/buttons/ButtonPopup',
	component: ButtonPopup,
	tags: ['autodocs'],
	args: {
	},
	argTypes: {

	}
} satisfies Meta<typeof ButtonPopup>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
