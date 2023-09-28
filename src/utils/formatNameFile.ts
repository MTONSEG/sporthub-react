export const formatNameFile = (str: string): string => {
	let dotIndex: number = str.lastIndexOf('.');

	if (dotIndex) {
		let ext: string = str.slice(dotIndex);
		return str.length > 20 ? `${str.slice(0, 15)}...${ext}` : str;
	}

}