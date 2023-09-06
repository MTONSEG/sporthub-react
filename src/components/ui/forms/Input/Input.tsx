import React, { CSSProperties, useState } from "react";
import './Input.scss';
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../hooks/hooks";
import { Icon } from "../../atoms/Icon/Icon";

type inputType = {
	title?: string,
	placeholder?: string,
	type?: string,
	value: string,
	setValue: Function,
	maxWidth?: string,
	mb?: string,
}


const Input: React.FC<inputType> = ({
	title = '',
	placeholder = '',
	type = 'text',
	value,
	setValue,
	maxWidth = '100%',
	mb = '24px'
}) => {

	const forgot = useAppSelector(state => state.singin.forgot);
	const isPassword: boolean = type === 'password';
	const styles: CSSProperties = {
		maxWidth,
		marginBottom: mb
	}

	const passViewClickHandler = () => {
	}
	return (
		<div className="input-field" style={styles}>
			<div className="input-field__head">
				<p className="input-field__title">{title}</p>
				{
					isPassword
						? <Link className="input-field__forgot-link"
							to={forgot.link}>
							{forgot.title}
						</Link>
						: <></>
				}

			</div>

			<div className="input-field__wrapper">
				<input
					style={
						isPassword ? { paddingRight: '48px' } : {}
					}
					type={type}
					className="input-field__input"
					aria-label={title}
					value={value}
					placeholder={placeholder}
					onChange={e => { setValue(e.target.value) }}
				/>
				{
					isPassword
						? <button
							className="input-field__pass-view-btn"
							onClick={passViewClickHandler}
						>
							<Icon
								id="eye"
								className="input-field__eye-icon"
							/>
						</button>

						: <></>
				}
			</div>
		</div>
	)
}

export default Input
