import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PopupOption from './PopupOption';
import { useAppSelector } from '../../../../hooks/hooks';
import { setGenderValue } from '../../../../redux/slices/auth/personalSlice';
import ItemPopupOption from './ItemPopupOption/ItemPopupOption';


const meta: Meta<typeof PopupOption> = {
	title: 'ui/atoms/PopupOption',
	component: PopupOption,
	tags: ['autodocs'],
	parameters: {
		layout:'centered'
	},
	argTypes: {
	}
} satisfies Meta<typeof PopupOption>
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: Story) => {

	return (
		<PopupOption
			children={
				<>
					<ItemPopupOption text='Example 1' />
					<ItemPopupOption text='Example 2' />
				</>
			}
		/>
	)
}

export const Default: Story = Template.bind({});
Default.args = {}
