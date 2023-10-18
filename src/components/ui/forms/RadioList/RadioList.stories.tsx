import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import RadioList from './RadioList';
import { useAppSelector } from '../../../../hooks/hooks';
import { setGenderValue } from '../../../../redux/slices/auth/personalSlice';


const meta: Meta<typeof RadioList> = {
	title: 'ui/forms/RadioList',
	component: RadioList,
	tags: ['autodocs'],
	argTypes: {
	}
} satisfies Meta<typeof RadioList>
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: Story) => {
	const {radio} = useAppSelector(state=>state.personalAuth)

	return (
		<RadioList {...args}
			title='Example title'
			list={radio.list}
			current={radio.value}
			setStateCurrent={setGenderValue}
		/>
	)
}

export const Default: Story = Template.bind({});
Default.args = {}
