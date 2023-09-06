import React, { useState } from "react";
import './SingIn.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";

const data = {
	title: 'Sign in'
}

const SingIn = () => {
	const state = useAppSelector(state => state.singin);
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<>
			<TitleAuth title={state.title} mb="40px"/>
			<div className="sing-in">
				<Input
					value={email}
					setValue={setEmail}
					title={state.email.title}
					placeholder={state.email.placeholder}
				/>
				<Input
					value={password}
					setValue={setPassword}
					title={state.password.title}
					placeholder={state.password.placeholder}
					type="password"
				/>
			</div>
		</>
	)
}

export default SingIn;
