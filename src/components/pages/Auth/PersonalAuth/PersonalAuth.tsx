import React, { useState } from "react";
import './PersonalAuth.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";
import Container from "../../../containers/Container/Container";
import Radio from "../../../ui/forms/Radio/Radio";
import { genderType } from "../../../../redux/slices/auth/personalSlice";
import RadioList from "../../../ui/forms/RadioList/RadioList";


type propsType = {
	email?: string
}

const PersonalAuth: React.FC<propsType> = ({ email }) => {
	const {radio, ...state} = useAppSelector(state => state.personalAuth);
	const [gender, setGender] = useState<genderType>('none');

	return (
		<div className="personal-auth">
			<TitleAuth title="Personal Information" />
			<RadioList
				title={radio.title}
				list={radio.list}
				current={gender}
				setCurrent={setGender}
			/>
		</div>
	)
}

export default PersonalAuth;
