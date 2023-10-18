import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'

import VideoPlayer from './VideoPlayer';


const meta: Meta<typeof VideoPlayer> = {
	title: 'common/VideoPlayer',
	component: VideoPlayer,
	tags: ['autodocs'],
	args: {
		maxWidth: '500px',
		videoSrc: 'https://firebasestorage.googleapis.com/v0/b/sporthub-8cd3f.appspot.com/o/videos%2Fjf6VlSFexbOMEc7vsr1fXFtzYR13%2FMetro%20Exodus.mp4?alt=media&token=9e046e23-109b-47c1-b58d-da3a08d04911',
		posterSrc: 'https://firebasestorage.googleapis.com/v0/b/sporthub-8cd3f.appspot.com/o/posters%2FpDkPhoMRlrY0NB92wK0JZdcsNOR2%2FBatman-86-Banner.webp?alt=media&token=269d90a2-0aa2-4c66-a2b6-2bf52ecfbf3c'
	},
	argTypes: {
	}
} satisfies Meta<typeof VideoPlayer>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

