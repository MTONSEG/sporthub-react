import { Meta, StoryObj } from '@storybook/react';
import  UploadVideo  from './UploadVideo';

const meta: Meta<typeof UploadVideo> = {
	title: 'ui/forms/UploadVideo',
	component: UploadVideo,
	tags: ['autodocs'],
	args: {
		userUID: 'jf6VlSFexbOMEc7vsr1fXFtzYR13'
	},
	argTypes: {

	}
} satisfies Meta<typeof UploadVideo>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
