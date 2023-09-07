import React, { useState } from "react";
import './ForgotPassword.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

type propsType = {
	setRestoreEmail: Function
}


const ForgotPassword: React.FC<propsType> = ({ setRestoreEmail }) => {
	const state = useAppSelector(state => state.forgot);
	const navigate = useNavigate();
	const [email, setEmail] = useState<string>('');

	const handlerClickBtn = (): void => {
		setRestoreEmail(email);
	}

	return (
		<>
			<TitleAuth title={state.title} mb="16px" />
			<p className="forgot-text" >{state.text}</p>
			<div className="sing-in">
				<div className="sing-in__input-list">
					<Input
						value={email}
						setValue={setEmail}
						title={state.email.title}
						placeholder={state.email.placeholder}
						type="email"
						mb="0"
					/>
				</div>
				<div className="sing-in__footer">
					<Button
						maxWidth="180px"
						onClickHandler={handlerClickBtn}
						centered={true}>{state.btn}</Button>
				</div>


			</div>
		</>
	)
}

export default ForgotPassword;
