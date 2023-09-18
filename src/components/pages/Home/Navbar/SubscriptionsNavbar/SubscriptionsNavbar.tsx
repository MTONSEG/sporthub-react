import React, { useEffect } from "react";
import './SubscriptionsNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { getUsers } from "../../../../../redux/slices/home/navbarSlice";
import SubscriberNavItem from "./SubscriberNavItem/SubscriberNavItem";


interface PropsType {
	login?: boolean
}

const SubscriptionsNavbar: React.FC<PropsType> = ({ login }) => {
	const { users, subscribers } = useAppSelector(state => state.navbar);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch])

	if (users) console.log(subscribers);

	return (
		<div className="subscription-navbar">
			<h2 className="subscription-navbar__title"></h2>

			{
				subscribers?.map(el => (
					<SubscriberNavItem
						key={el.uid}
						name={`${el.firstName} ${el.lastName}`}
						imgSrc={el.imageUrl}
					/>
				))
			}
		</div>
	)
}

export default SubscriptionsNavbar;