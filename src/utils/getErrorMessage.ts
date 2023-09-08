export const getClearMessage = (error: string): string => {
	let errorMess: string = error.split('/').pop().split('-').join(' ');
	return errorMess.charAt(0).toUpperCase() + errorMess.slice(1);
}