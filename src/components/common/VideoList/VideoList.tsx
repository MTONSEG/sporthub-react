import React, { CSSProperties, ReactElement } from 'react';
import './VideoList.scss';
import { Title } from '../../ui/atoms/Title/Title';
import VideoItem from '../VideoItem/VideoItem';
import { useAppSelector } from '../../../hooks/hooks';

interface IVideoList {
	text?: string,
	title?: string,
	style?: CSSProperties,
	listVideo?: any
}

const VideoList: React.FC<IVideoList> = ({ text, title, style }) => {
	const {...state} = useAppSelector(state=>state.videoList)
	const styles = {
		...style
	}

	return (
		<>
			<Title text={title}/>
			<div className={'video-list'} style={styles}>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					date='3 day ago'
					name='klusha lolegova'

				/>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					
				/>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					
				/>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					
				/>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					
				/>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					
				/>
				<VideoItem
					title='Amet minim mollit non deserunt ullamco est sit aliqua dolor do ame...'
					
				/>
			</div>
		</>
	)
}

export default VideoList;