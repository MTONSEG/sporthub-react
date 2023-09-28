import React, { useEffect, useState } from "react";
import './RestorePassword.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppDispatch, useAppSelector } from "../../../../hooks/hooks";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { get, ref, update } from "firebase/database";
import {signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { getClearMessage } from "../../../../utils/getErrorMessage";
import { AUTH_ROUTE } from "../../../../routes/routes";
import { setCurrentRestorePass } from "../../../../redux/slices/auth/restoreSlice";
import { auth, db } from '../../../../initializeFirebase';

interface RestoreObject {
	uid: string,
	email: string
}

type CurrentRestoreType = RestoreObject | null;

const RestorePassword = () => {
	const state = useAppSelector(state => state.restore);
	const alert = useAppSelector(state => state.alert);

	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const current: CurrentRestoreType = JSON.parse(localStorage.getItem('sporthub-restore-uid'));

	useEffect(() => {
		const userRef = ref(db, `users/${current.uid}`)

		get(userRef).then(res => {
			const user = res.val();
			dispatch(setCurrentRestorePass(user.password));
		})
	}, [])

	const handleSave = () => {
		const isConfirm = password === confirmPassword;
		const isLength = password.length > 5;
		console.log(state.currentPass);

		if (!isConfirm) {
			dispatch(setVarianError());
			dispatch(setMessage(alert.confirmPass));
			dispatch(showAlert(true));

			setTimeout((): void => {
				dispatch(showAlert(false));
				dispatch(setVarianMess());
			}, 3000)

			return
		}
		if (!isLength) {
			dispatch(setVarianError());
			dispatch(setMessage(alert.weekPass));
			dispatch(showAlert(true));

			setTimeout((): void => {
				dispatch(showAlert(false));
				dispatch(setVarianMess());
			}, 3000)

			return
		}

		signInWithEmailAndPassword(auth, current.email, state.currentPass)
			.then((userCredential) => {
				updatePassword(userCredential.user, password).then(() => {
					dispatch(setMessage(alert.updatePass))
					dispatch(showAlert(true));

					setTimeout((): void => {
						dispatch(showAlert(false));
					}, 4000)

					update(ref(db, `users/${current.uid}`), {password});

					signOut(auth);

					navigate(AUTH_ROUTE);

					localStorage.removeItem('sporthub-restore-uid')
				})
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
					<Button maxWidth="180px" centered={true} onClickHandler={handleSave}>{state.btn}</Button>
				</div>
			</div>
		</>
	)
}

export default RestorePassword;
