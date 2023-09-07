import React from "react";
import './SubtextAuth.scss';
import { Link } from "react-router-dom";

type propsType = {
	text: string,
	path: string,
	titleLink: string
}

export const SubtextAuth:React.FC<propsType> = ({ text, path, titleLink }) => {
	return (
		<p className="subtext-auth">
			<span className="subtext-auth__text">{text}</span>
			<Link to={path} className="subtext-auth__link">{titleLink}</Link>
		</p>
	)
}

