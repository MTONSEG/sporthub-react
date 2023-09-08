import React, { useState } from "react";
import './PersonalAuth.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import { genderType } from "../../../../redux/slices/auth/personalSlice";
import RadioList from "../../../ui/forms/RadioList/RadioList";
import Loading from "../../../ui/atoms/Loading/Loading";
import Upload from "../../../ui/forms/Upload/Upload";
import Input from "../../../ui/forms/Input/Input";
import { Button } from "../../../ui/atoms/Button/Button";

type propsType = {
	email?: string
}

const PersonalAuth: React.FC<propsType> = ({ email }) => {
	const { radio, upload, birthday, ...state } = useAppSelector(state => state.personalAuth);
	const [gender, setGender] = useState<genderType>('none');
	const [date, setDate] = useState<string>('');

	return (
		<React.Suspense fallback={<Loading />}>
			<div className="personal-auth">
				<TitleAuth title={state.title} mb="39px" />
				<Upload
					title={upload.title}
					text={upload.text}
					mb="28px" />
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
				<div className="personal-auth__button-wrap">
					<Button variant="black" >{state.btnBack}</Button>
					<Button>{state.btnNext}</Button>
				</div>
			</div>
		</React.Suspense>
	)
}

export default PersonalAuth;
