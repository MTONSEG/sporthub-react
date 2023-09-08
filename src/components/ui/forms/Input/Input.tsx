import React, { CSSProperties, useState } from "react";
import './Input.scss';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import { Icon } from "../../atoms/Icon/Icon";
import { isChecked } from "../../../../utils/addActiveClassFunctions";
import InputDateMask from 'react-input-mask';

type eventTarget = {
	target: {
		value: string;
	}
}


type inputType = {
	title?: string,
	placeholder?: string,
	type?: string,
	value: string,
	setValue: Function,
	maxWidth?: string,
	mb?: string,
	forgotLink?: boolean,
	dateMask?: string,
	maskChar?: string,
}

type passType = 'password' | 'text';


const Input: React.FC<inputType> = ({
	title = '',
	placeholder = '',
	type = 'text',
	value,
	setValue,
	maxWidth = '100%',
	mb = '22px',
	forgotLink = false,
	dateMask,
	maskChar
}) => {
	const [typePass, setTypePass] = useState<passType>('password');
	const forgot = useAppSelector(state => state.singin.forgot);
	const isPassword: boolean = type === 'password';
	const styles: CSSProperties = {
		maxWidth,
		marginBottom: mb
	}

	const passViewClickHandler = (): void => {
		if (typePass === 'password') setTypePass('text');
		if (typePass === 'text') setTypePass('password');
	}

	return (
		<div className="input-field" style={styles}>
			<div className="input-field__head">
				<p className="input-field__title">{title}</p>
				{
					forgotLink
						? <Link className="input-field__forgot-link"
							to={forgot.link}>
							{forgot.title}
						</Link>
						: <></>
				}

			</div>

			<div className="input-field__wrapper">
				{
					isPassword
						? <button
							className={`input-field__pass-view-btn ${isChecked(typePass, 'text', 'show')}`}
							onClick={passViewClickHandler}
						>
							<Icon
								id="eye"
								className={`input-field__eye-icon`}
							/>
						</button>

						: <></>
				}
				{
					dateMask
						? <>
							<InputDateMask
								className="input-field__input"
								aria-label={title}
								mask={dateMask}
								maskChar={maskChar}
								placeholder={placeholder}
								value={value}
								onChange={(e: eventTarget) => { setValue(e.target.value) }}
							/>
						</>

						: <input
							style={
								isPassword ? { paddingRight: '48px' } : {}
							}
							type={isPassword ? typePass : type}
							className="input-field__input"
							aria-label={title}
							value={value}
							placeholder={placeholder}
							onChange={(e: eventTarget) => { setValue(e.target.value) }}
						/>
				}


			</div>
		</div>
	)
}

export default Input
