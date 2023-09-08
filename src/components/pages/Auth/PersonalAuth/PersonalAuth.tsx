import React, { useEffect, useState } from "react";
import './PersonalAuth.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector, useAppDispatch } from "../../../../hooks/hooks";
import { genderType } from "../../../../redux/slices/auth/personalSlice";
import RadioList from "../../../ui/forms/RadioList/RadioList";
import Upload from "../../../ui/forms/Upload/Upload";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";
import { setMessage, setVarianError, setVarianMess, showAlert } from "../../../../redux/slices/alert/alertSlice";
import { useNavigate } from "react-router-dom";
import { AUTH_REG_ROUTE } from "../../../../routes/routes";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

type propsType = {
	email?: string
}


interface IAdditionalData {
	displayName: string
}


const PersonalAuth: React.FC<propsType> = ({ email }) => {
	const singup = useAppSelector(state => state.singup);
	const alert = useAppSelector(state => state.alert);

	const { radio, upload, birthday, ...state } = useAppSelector(state => state.personalAuth);
	const [gender, setGender] = useState<genderType>('none');
	const [date, setDate] = useState<string>('');

	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const auth = getAuth();

	useEffect(() => {
		signInWithEmailAndPassword(auth, 'mtonseg@gmail.com', 'pass123')
			.then((res) => {
				console.log(auth.currentUser);


				if (!auth.currentUser) {
					dispatch(setVarianError());
					dispatch(setMessage(alert.needReg));
					dispatch(showAlert(true));
					setTimeout((): void => {
						dispatch(showAlert(false));
						dispatch(setVarianMess());
					}, 3000);

					// navigate(AUTH_REG_ROUTE);
				}
			})

	}, [])

	const handlerFinishBtn = (): void => {

	}

	return (
		<>
			<TitleAuth title={state.title} mb="39px" />
			<Upload
				title={upload.title}
				text={upload.text}
				mb="28px"
				accept={upload.accept}
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
				value={date}
				setValue={setDate}
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
