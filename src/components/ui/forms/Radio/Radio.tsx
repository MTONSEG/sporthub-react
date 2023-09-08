import React, { CSSProperties } from "react";
import './Radio.scss';
import { isChecked } from "../../../../utils/addActiveClassFunctions";

interface radioType {
	title?: string,
	value: string,
	current: string,
	maxWidth?: string,
	name:string,
	mb?: string,
	setCurrent: Function
}


const Radio: React.FC<radioType> = ({
	title,
	value,
	current,
	setCurrent,
	name,
	maxWidth,
	mb = '0'
}) => {

	const style: CSSProperties = {
		maxWidth,
		marginBottom: mb
	}
	return (
		<label className={`radio-filed ${isChecked(current, value, 'active')}`} style={style}>
			<input
				type="radio"
				name={name}
				value={value}
				checked={current === value}
				onChange={e => { setCurrent(e.target.value) }}
				className="radio-filed__input" />
			<div className="radio-filed__custom"></div>
			<p className="radio-filed__title">{title}</p>
		</label>
	)
}

export default Radio
