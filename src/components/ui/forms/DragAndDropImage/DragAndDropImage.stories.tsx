import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DragAndDropImage from './DragAndDropImage';
import { useAppSelector } from '../../../../hooks/hooks';
import { setGenderValue } from '../../../../redux/slices/auth/personalSlice';


const meta: Meta<typeof DragAndDropImage> = {
	title: 'ui/forms/DragAndDropImage',
	component: DragAndDropImage,
	tags: ['autodocs'],
	argTypes: {
	}
} satisfies Meta<typeof DragAndDropImage>
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: Story) => {
	const {radio} = useAppSelector(state=>state.personalAuth)

	return (
		<DragAndDropImage />
	)
}

export const Default: Story = Template.bind({});
Default.args = {}
