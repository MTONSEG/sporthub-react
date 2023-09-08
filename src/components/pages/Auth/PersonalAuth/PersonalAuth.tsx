import React, { useState } from "react";
import './PersonalAuth.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import { genderType } from "../../../../redux/slices/auth/personalSlice";
import RadioList from "../../../ui/forms/RadioList/RadioList";
import Loading from "../../../ui/atoms/Loading/Loading";
import Upload from "../../../ui/forms/Upload/Upload";


type propsType = {
	email?: string
}

const PersonalAuth: React.FC<propsType> = ({ email }) => {
	const { radio,upload, ...state } = useAppSelector(state => state.personalAuth);
	const [gender, setGender] = useState<genderType>('none');

	return (
		<React.Suspense fallback={<Loading />}>
			<div className="personal-auth">
				<TitleAuth title={state.title} mb="40px" />
				<Upload title={ upload.title} text={upload.text} mb="24px" />
				<RadioList
					title={radio.title}
					list={radio.list}
					current={gender}
					setCurrent={setGender}
				/>
			</div>
		</React.Suspense>
	)
}

export default PersonalAuth;
