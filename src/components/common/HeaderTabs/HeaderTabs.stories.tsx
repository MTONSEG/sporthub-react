import React from 'react';
import type { Meta, StoryObj } from '@storybook/react'

import HeaderTabs from './HeaderTabs';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { UserTabPathTypes } from '../../../redux/slices/userInfo/userInfoSlice';
import { setVideoTabValue, sortPlaylist, sortVideoList } from '../../../redux/slices/video/videoSlice';

const meta: Meta<typeof HeaderTabs> = {
	title: 'common/HeaderTabs',
	component: HeaderTabs,
	tags: ['autodocs'],
	argTypes: {
	}
};
export default meta;

const Template = () => {
	const dispatch = useAppDispatch();
	const { tabList, videoTabValue } = useAppSelector(state => state.videos);

	const handleTabCLick = (value: UserTabPathTypes): void => {
		dispatch(setVideoTabValue(value));
	}

	return (
		<HeaderTabs
			tabList={tabList}
			tabWidth={100}
			tabValue={videoTabValue}
			handlerTabClick={handleTabCLick}
		/>
	)
}

export const Default:StoryObj = Template.bind({});
Default.args = {}
