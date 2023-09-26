import React, { CSSProperties } from "react";
import './RadioList.scss';
import { radioType } from "../../../../redux/slices/auth/personalSlice";
import Radio from "../Radio/Radio";

interface radioListType {
	title?: string,
	list?: radioType[],
	current: string,
	mb?: string,
	setCurrent?: Function,
	setStateCurrent?: Function,
	className?: string
}

const RadioList: React.FC<radioListType> = ({
	list,
	title,
	current,
	setCurrent,
	mb = '0',
	className,
	setStateCurrent
}) => {
	const style: CSSProperties = {
		marginBottom: mb
	}

	return (
		<div className={`radio-list${className ? ` ${className}` : ''}`} style={style}>
			<p className="radio-list__title">{title}</p>
			<div className="radio-list__radios-wrap">
				{
					list.map(el => (
						<Radio
							key={el.id}
							title={el.title}
							name={title}
							value={el.value}
							current={current}
							setCurrent={setCurrent}
							setStateCurrent={setStateCurrent}
						/>
					))
				}
			</div>
		</div>
	)
}

export default RadioList
