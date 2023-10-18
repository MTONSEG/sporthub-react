import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';


const meta: Meta<typeof Input> = {
	title: 'ui/forms/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
	}
} satisfies Meta<typeof Input>
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: Story) => {
	const [value, setValue] = useState<string>();

	return (
		<Input {...args}
			title='Example title'
			maxWidth='300px'
			value={value}
			setValue={setValue} />
	)
}

export const Default: Story = Template.bind({});
Default.args = {

}

export const Password: Story = Template.bind({});
Password.args = {
	forgotLink: true,
	type: 'password'
}

export const Date: Story = Template.bind({});
Date.args = {
	dateMask: '99.99.9999',
	maskChar: '_'
}
