import React from "react";
import './SubscriptionsNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../../../../hooks/hooks";


interface PropsType {
	login?: boolean
}

const SubscriptionsNavbar: React.FC<PropsType> = ({ login }) => {

	return (
		<div className="SubscriptionsNavbar">

		</div>
	)
}

export default SubscriptionsNavbar;