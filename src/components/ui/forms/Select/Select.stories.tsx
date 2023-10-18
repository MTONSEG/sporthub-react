import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { useAppSelector } from '../../../../hooks/hooks';
import { setGenderValue } from '../../../../redux/slices/auth/personalSlice';
import { setCategoryValue } from '../../../../redux/slices/video/videoSlice';


const meta: Meta<typeof Select> = {
	title: 'ui/forms/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
	}
} satisfies Meta<typeof Select>
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: Story) => {
	const {category} = useAppSelector(state=>state.videos)

	return (
		<Select {...args}
			title='Example title'
			list={category.list}
			placeholder={category.placeholder}
			value={category.value}
			setStateValue={setCategoryValue}
		/>
	)
}

export const Default: Story = Template.bind({});
Default.args = {}
