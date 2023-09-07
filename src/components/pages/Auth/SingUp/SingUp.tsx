import React, { useState } from "react";
import './SingUp.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";
import { TermsPolicyAuth } from "../TermsPolicyAuth/TermsPolicyAuth";

const data = {
	title: 'Sign in'
}

const SingUp = () => {
	const state = useAppSelector(state => state.singup);
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	return (
		<>
			<TitleAuth title={state.title} mb="40px" />
			<div className="sing-in">
				<div className="sing-in__input-list">
					<Input
						value={firstName}
						setValue={setFirstName}
						title={state.firstName.title}
						placeholder={state.firstName.placeholder}
					/>
					<Input
						value={lastName}
						setValue={setLastName}
						title={state.lastName.title}
						placeholder={state.lastName.placeholder}
					/>
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
						mb="0"
					/>
				</div>
				<div className="sing-in__footer">
					<Button maxWidth="180px" centered={true}>{state.btn}</Button>
				</div>

				<SubtextAuth
					titleLink={state.subtext.linkTitle}
					path={state.subtext.link}
					text={state.subtext.text}
				/>
			</div>
			<TermsPolicyAuth />
		</>
	)
}

export default SingUp;
