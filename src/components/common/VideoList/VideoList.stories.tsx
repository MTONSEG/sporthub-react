import React, { useEffect, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react'

import VideoList from './VideoList';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { VideoFileType, getVideos } from '../../../redux/slices/video/videoSlice';
import { getUserUID } from '../../../utils/getUserUID';
import Loading from '../../ui/atoms/Loading/Loading';
import { getUsers } from '../../../redux/slices/home/userSlice';
import { User } from 'firebase/auth';


const meta: Meta<typeof VideoList> = {
	title: 'common/VideoList',
	component: VideoList,
	tags: ['autodocs'],
	argTypes: {
		authorView: {
			description: 'view author info'
		}
	}
};
export default meta;

const Template = () => {
	const [videos, setVideos] = useState<VideoFileType[]>();
	const [user, setUser] = useState<User>();

	useEffect(() => {
		async function fetchVideo() {
			try {
				let resVideo = await fetch('https://sporthub-8cd3f-default-rtdb.firebaseio.com/videos.json');
				let resUsers = await fetch('https://sporthub-8cd3f-default-rtdb.firebaseio.com/users.json');

				let videosData: VideoFileType = await resVideo.json();
				let usersData: User = await resUsers.json();

				let listVideo: VideoFileType[] = [];

				for (let key in videosData) {
					listVideo.push({ uid: key, selected: false, ...videosData })
				}
				setVideos([...listVideo]);
				setUser({ ...usersData['jf6VlSFexbOMEc7vsr1fXFtzYR13'] });

				console.log(listVideo);
				
			}
			catch (e) {
				console.log(e);
			}
		}
		fetchVideo()
	}, [])

	if (!videos || !user) return <Loading />

	return (
		<VideoList
			videos={videos}
			user={user}
			title='Example title'
		/>
	)
}

export const Default: StoryObj = Template.bind({});
Default.args = {}
