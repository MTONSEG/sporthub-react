export const getCreateDate = (timestamp: Date) => {
	const now: Date = new Date();
	const date: Date = new Date(timestamp);
	now.setHours(0, 0, 0, 0);

	const diffInMilliseconds: number = now.getTime() - date.getTime();
	const diffInDate: number = Math.ceil((diffInMilliseconds / 1000 / 60 / 60) / 24);

	return diffInDate > 0 ? diffInDate + ' days ago': 'today';
}