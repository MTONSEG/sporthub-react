import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';


const meta: Meta<typeof Textarea> = {
	title: 'ui/forms/Textarea',
	component: Textarea,
	tags: ['autodocs'],
	argTypes: {
	}
} satisfies Meta<typeof Textarea>
export default meta;
type Story = StoryObj<typeof meta>;

const Template = () => {
	const [value, setValue] = useState<string>();

	return (
		<Textarea
			title='Example'
			placeholder='Placeholder'
			value={value}
			setValue={setValue}
			maxWidth='400px'
		/>
	)
}

export const Default:Story = Template.bind({});
Default.args = {}
