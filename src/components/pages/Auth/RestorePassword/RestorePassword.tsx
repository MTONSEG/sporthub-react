import React, { useState } from "react";
import './RestorePassword.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";



const RestorePassword = () => {
	const state = useAppSelector(state => state.restore);
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	return (
		<>
			<TitleAuth title={state.title} mb="40px" />
			<div className="sing-in">
				<div className="sing-in__input-list">
					<Input
						value={password}
						setValue={setPassword}
						title={state.password.title}
						placeholder={state.password.placeholder}
						type="password"
					/>
					<Input
						value={confirmPassword}
						setValue={setConfirmPassword}
						title={state.confirmPassword.title}
						placeholder={state.confirmPassword.placeholder}
						type="password"
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

export default RestorePassword;
