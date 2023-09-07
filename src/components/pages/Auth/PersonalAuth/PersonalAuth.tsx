import React from "react";
import './PersonalAuth.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";
import Container from "../../../containers/Container/Container";

type propsType = {
	email?: string
}

const PersonalAuth: React.FC<propsType> = ({ email }) => {
	// const state = useAppSelector(state => state.check);

	return (
			<div className="personal-auth">
				<TitleAuth title="Personal Information" />
			</div>
	)
}

export default PersonalAuth;
