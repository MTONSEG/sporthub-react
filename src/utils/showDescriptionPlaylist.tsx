export const showDescriptionPlaylist = (str: string, amount: number): string =>
	str.split(' ').slice(0, amount).join(' ') + '...';