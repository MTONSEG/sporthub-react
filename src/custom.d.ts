declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.png' {
	const content: string;
	export default content;
}

declare module '*.png?as=webp' {
	const value: string;
	export default value;
}
declare module '*.jpg?as=webp' {
	const value: string;
	export default value;
}

declare module 'react-input-mask' {
	const InputDateMask: any; 
	export default InputDateMask;
}