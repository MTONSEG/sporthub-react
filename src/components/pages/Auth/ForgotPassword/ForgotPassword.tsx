import React, { useState } from "react";
import './ForgotPassword.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";
import { TermsPolicyAuth } from "../TermsPolicyAuth/TermsPolicyAuth";


const ForgotPassword = () => {
	const state = useAppSelector(state => state.forgot);
	const [email, setEmail] = useState<string>('');

	return (
		<>
			<TitleAuth title={state.title} mb="16px" />
			<p className="forgot-text" >{state.text }</p>
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
					<Button maxWidth="180px" centered={true}>{state.btn}</Button>
				</div>


			</div>
		</>
	)
}

export default ForgotPassword;
