declare module '*.jpg' {
	const content: string;
	export default content;
}

declare module '*.jpg?as=webp' {
	const value: string;
	export default value;
}

declare module 'react-input-mask' {
	const InputDateMask: any; 
	export default InputDateMask;
}