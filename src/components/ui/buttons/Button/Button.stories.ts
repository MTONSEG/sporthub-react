import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
	title: 'ui/buttons/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Click me please = )',
		style: { width: '1100px' },
		maxWidth: '200px'
	},
	argTypes: {
		children: {
			name: 'label',
		},
		centered: {
			description: 'if true - add "margin: 0 auto;"'
		},
		mb: {
			description: 'margin-bottom'
		}
	}
} satisfies Meta<typeof Button>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		
	},
};
