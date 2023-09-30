import React, { useEffect, useState } from "react";
import './PersonalAuth.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector, useAppDispatch } from "../../../../hooks/hooks";
import { genderType } from "../../../../redux/slices/auth/personalSlice";
import RadioList from "../../../ui/forms/RadioList/RadioList";
import Upload from "../../../ui/forms/Upload/Upload";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/buttons/Button/Button";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { useNavigate } from "react-router-dom";
import { AUTH_REG_ROUTE, AUTH_ROUTE } from "../../../../routes/routes";
import { ref, update } from "firebase/database";
import { setCurrentUser } from "../../../../redux/slices/auth/singinSlice";
import { auth, db } from '../../../../initializeFirebase';


const PersonalAuth: React.FC = () => {
	const singup = useAppSelector(state => state.singup);
	const alert = useAppSelector(state => state.alert);

	const { radio, upload, birthday, ...state } = useAppSelector(state => state.personalAuth);
	const [gender, setGender] = useState<genderType>('none');
	const [bod, setBod] = useState<string>('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();

	const userRef = ref(db, `users/${singup.current.uid}`);

	useEffect(() => {
		if (!auth.currentUser) {
			dispatch(setVarianError());
			dispatch(setMessage(alert.needReg));
			dispatch(showAlert(true));
			setTimeout((): void => {
				dispatch(showAlert(false));
				dispatch(setVarianMess());
			}, 3000);

			navigate(AUTH_REG_ROUTE);
		}
	}, [])

	const handlerFinishBtn = (): void => {
		const dataRef = { gender, bod };
		const user = auth.currentUser;

		localStorage.setItem('sh-current', JSON.stringify({
			uid: user.uid,
			name: user.displayName,
			email: user.email,
			photoURL: user.photoURL
		}))

		update(userRef, dataRef)
			.then(() => {
				dispatch(setMessage(alert.singin))
				dispatch(showAlert(true));

				setTimeout((): void => {
					dispatch(showAlert(false));
				}, 5000)


				navigate(AUTH_ROUTE);
			})

		dispatch(setCurrentUser({ name: user.displayName, photoURL: user.photoURL }));
	}

	return (
		<>
			<TitleAuth title={state.title} mb="39px" />
			<Upload
				userRef={userRef}
				title={upload.title}
				text={upload.text}
				mb="28px"
				accept={upload.accept}
				auth={auth}
			/>
			<RadioList
				mb="24px"
				title={radio.title}
				list={radio.list}
				current={gender}
				setCurrent={setGender}
			/>
			<Input
				mb="36px"
				title={birthday.title}
				placeholder={birthday.placeholder}
				value={bod}
				setValue={setBod}
				dateMask={birthday.dateMask}
				maskChar={birthday.maskChar}
			/>
			<Button
				centered={true}
				maxWidth="180px"
				onClickHandler={handlerFinishBtn}
			>{state.btnNext}</Button>
		</>
	)
}

export default PersonalAuth;
