import React from "react";
import './CheckEmail.scss';
import TitleAuth from "../../../ui/atoms/TitleAuth/TitleAuth";
import { useAppSelector } from "../../../../hooks/hooks";
import { SubtextAuth } from "../SubtextAuth/SubtextAuth";

const CheckEmail = () => {
	const state = useAppSelector(state => state.check);
	const email = useAppSelector(state => state.forgot.current);

	return (
		<>
			<TitleAuth title={state.title} mb="16px" />
			<p className="forgot-text" >
				Check your email <span>{email}</span> for instructions on how to reset your password. If it doesn’t appear within a few minutes, check your spam folder.
			</p>
			<div className="sing-in">
				<SubtextAuth
					titleLink={state.subtext.linkTitle}
					path={state.subtext.link}
					text={state.subtext.text}
				/>
			</div>
		</>
	)
}

export default CheckEmail;
