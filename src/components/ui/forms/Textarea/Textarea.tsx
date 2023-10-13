import React, { CSSProperties, ChangeEvent, useEffect, useRef, useState } from "react";
import './Textarea.scss';
import { useAppDispatch } from "../../../../hooks/hooks";

type TextareaType = {
	title?: string,
	placeholder?: string,
	value: string,
	setValue?: Function,
	setStateValue?: Function,
	maxWidth?: string,
	mb?: string,
	forgotLink?: boolean,
	dateMask?: string,
	maskChar?: string,
	className?: string,
}


const Textarea: React.FC<TextareaType> = ({
	title = '',
	placeholder = '',
	value,
	setValue,
	setStateValue,
	maxWidth = '100%',
	mb = '0',
	className
}) => {

	const [height, setHeight] = useState<string>();
	const dispatch = useAppDispatch();

	const styles: CSSProperties = {
		maxWidth,
		marginBottom: mb
	}

	const ref = useRef<HTMLTextAreaElement>()

	useEffect(() => {
		const scrollHeight: number = ref.current.scrollHeight;
		const newHeight: string = ref.current.scrollHeight + 'px';
		setHeight(newHeight);
	}, [value])

	const handelOnChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		console.log(e.currentTarget.value);

		if (setStateValue) {
			dispatch(setStateValue(e.currentTarget.value));
		} else {
			setValue(e.currentTarget.value);
		}
	}

	return (
		<div className={`input-field${className ? ` ${className}` : ''}`} style={styles}>
			{
				title
					? <p className="input-field__title">{title}</p>
					: <></>
			}


			<div className="input-field__wrapper">
				<textarea
					ref={ref}
					style={{ height }}
					className="input-field__input"
					aria-label={title}
					value={value}
					placeholder={placeholder}
					onChange={(e: ChangeEvent<HTMLTextAreaElement>) => { handelOnChange(e) }}
				></textarea>
			</div>
		</div>
	)
}

export default Textarea;
