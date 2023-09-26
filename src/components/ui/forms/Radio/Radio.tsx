import React, { CSSProperties, ChangeEvent } from "react";
import './Radio.scss';
import { isChecked } from "../../../../utils/addActiveClassFunctions";
import { useAppDispatch } from '../../../../hooks/hooks';

interface radioType {
	title?: string,
	value: string,
	current: string,
	maxWidth?: string,
	name: string,
	mb?: string,
	setCurrent?: Function,
	setStateCurrent?: Function
}


const Radio: React.FC<radioType> = ({
	title,
	value,
	current,
	setCurrent,
	setStateCurrent,
	name,
	maxWidth,
	mb = '0'
}) => {

	const style: CSSProperties = {
		maxWidth,
		marginBottom: mb
	}

	const dispatch = useAppDispatch();

	const handelOnChange = (e: ChangeEvent<HTMLInputElement>) => {

		if (setStateCurrent) {
			dispatch(setStateCurrent(e.currentTarget.value));
		} else {
			setCurrent(e.currentTarget.value);
		}
	}

	return (
		<label className={`radio-filed ${isChecked(current, value, 'active')}`} style={style}>
			<input
				type="radio"
				name={name}
				value={value}
				checked={current === value}
				onChange={(e: ChangeEvent<HTMLInputElement>) => { handelOnChange(e) }}
				className="radio-filed__input" />
			<div className="radio-filed__custom"></div>
			<p className="radio-filed__title">{title}</p>
		</label>
	)
}

export default Radio
