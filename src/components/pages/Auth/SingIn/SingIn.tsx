import React, { useState } from "react";
import './SingIn.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";
import { TermsPolicyAuth } from "../TermsPolicyAuth/TermsPolicyAuth";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { useNavigate } from "react-router-dom";
import { AUTH_REG_ROUTE } from "../../../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getClearMessage } from "../../../../utils/getErrorMessage";

const SingIn = () => {
	const alert = useAppSelector(state => state.alert);
	const state = useAppSelector(state => state.singin);
	
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const auth = getAuth();

	const handleSingIn = () => {
		const isFullInfo = email && password;

		if (!isFullInfo) {
			dispatch(setVarianError());
			dispatch(setMessage(alert.require));
			dispatch(showAlert(true));
			setTimeout((): void => {
				dispatch(showAlert(false));
				dispatch(setVarianMess());
			}, 3000)
			return
		}

		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				navigate('/')
				dispatch(setMessage(alert.welcome))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 5000)
			})
			.catch(error => {
				dispatch(setVarianError());
				dispatch(setMessage(getClearMessage(error.code)));
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
					dispatch(setVarianMess());
				}, 3000)
			})

	}

	return (
		<>
			<TitleAuth title={state.title} mb="40px" />
			<div className="sing-in">
				<div className="sing-in__input-list">
					<Input
						value={email}
						setValue={setEmail}
						title={state.email.title}
						placeholder={state.email.placeholder}
						type="email"
					/>
					<Input
						value={password}
						setValue={setPassword}
						title={state.password.title}
						placeholder={state.password.placeholder}
						forgotLink={true}
						type="password"
						mb="0"
					/>
				</div>
				<div className="sing-in__footer">
					<Button
						maxWidth="180px"
						centered={true}
						onClickHandler={handleSingIn}
					>{state.btn}</Button>
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

export default SingIn;
