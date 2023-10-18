import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'

import VideoItem from './VideoItem';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { VideoFileType, getVideos } from '../../../redux/slices/video/videoSlice';
import { getUserUID } from '../../../utils/getUserUID';
import Loading from '../../ui/atoms/Loading/Loading';


const meta: Meta<typeof VideoItem> = {
	title: 'common/VideoItem',
	component: VideoItem,
	tags: ['autodocs'],
	argTypes: {
		authorView: {
			description: 'view author info'
		}
	}
};
export default meta;

const Template = () => {
	const [video, setVideo] = useState<VideoFileType>()

	useEffect(() => {
		async function fetchVideo() {
			try {
				let resVideo = await fetch('https://sporthub-8cd3f-default-rtdb.firebaseio.com/videos/-NfupFpFOvrSwR9WawXx.json');
				let video: VideoFileType = await resVideo.json();
				setVideo(video);
			}
			catch (e) {
				console.log(e);
			}
		}
		fetchVideo()
	}, [])

	if(!video) return <Loading/>
	return (
		<VideoItem
			video={video}
			maxWidth='400px'
		/>
	)
}

export const Default: StoryObj = Template.bind({});
Default.args = {
	authorView: true
}
