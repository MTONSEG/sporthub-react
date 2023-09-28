import React, { useState } from "react";
import './ForgotPassword.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail} from "firebase/auth";
import { AUTH_CHECK_ROUTE } from "../../../../routes/routes";
import { getClearMessage } from "../../../../utils/getErrorMessage";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import { setCurrentForgotEmail } from "../../../../redux/slices/auth/forgotSlice";
import { get, ref } from "firebase/database";
import { auth, db } from '../../../../initializeFirebase';


const ForgotPassword = () => {
	const state = useAppSelector(state => state.forgot);
	const [email, setEmail] = useState<string>('');
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handlerClickBtn = (): void => {
		dispatch(setCurrentForgotEmail(email));

		sendPasswordResetEmail(auth, email)
			.then(() => {
				navigate(AUTH_CHECK_ROUTE);

				const usersRef = ref(db, 'users');

				get(usersRef).then((snapshot) => {
					let users = snapshot.val();

					for (let uid in users) {
						if (users[uid].email === email) {
							let obj = { uid, email };

							localStorage.setItem('sporthub-restore-uid', JSON.stringify(obj));
						}
					}
				})

				setTimeout(() => {
					localStorage.removeItem('sporthub-restore-uid')
				}, 600000)
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
