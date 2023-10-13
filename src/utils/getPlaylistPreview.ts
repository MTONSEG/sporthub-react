import { PlaylistType, VideoFileType } from '../redux/slices/video/videoSlice';

export const getPlaylistPreview = (arr: VideoFileType[]): VideoFileType[] => {
	if (arr.length <= 3) return arr;

	let list: VideoFileType[] = [];

	for (let i: number = 0; i <= 3; i++) {
		list.push(arr[i]);
	}

	return list;
}