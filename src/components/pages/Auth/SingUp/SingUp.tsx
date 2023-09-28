import React, { useState } from "react";
import './SingUp.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";
import { TermsPolicyAuth } from "../TermsPolicyAuth/TermsPolicyAuth";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { useNavigate } from "react-router-dom";
import { setCurrentUID } from "../../../../redux/slices/auth/singupSlice";
import { getClearMessage } from "../../../../utils/getErrorMessage";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, set } from "firebase/database";
import { AUTH_DATA_ROUTE } from "../../../../routes/routes";
import { Subscribe } from '../../../../redux/slices/home/userSlice';
import { auth, db } from '../../../../initializeFirebase';

export interface IAdditionalData {
	displayName: string
}

export interface ISingUpState {
	firstName: string,
	lastName: string,
	email: string,
	password: string
	subscribes?: Subscribe
}

const SingUp: React.FC = () => {
	const state = useAppSelector(state => state.singup);
	const alert = useAppSelector(state => state.alert);

	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const handleSingUp = (): void => {
		const isFullInfo = firstName && lastName && email && password;

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

		createUserWithEmailAndPassword(auth, email, password)
			.then(userCredential => {
				const user = userCredential.user;
				const userRef = ref(db, `users/${user.uid}`);
				const userData: ISingUpState = { firstName, lastName, email, password };

				updateProfile(auth.currentUser, {
					displayName: firstName
				})

				set(userRef, userData);
				dispatch(setCurrentUID(user.uid))


				navigate(AUTH_DATA_ROUTE);
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
					<Button
						maxWidth="180px"
						centered={true}
						onClickHandler={handleSingUp}
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

export default SingUp;
