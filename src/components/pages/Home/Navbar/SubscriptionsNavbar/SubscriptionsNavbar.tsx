import React, { useEffect, useState } from "react";
import './SubscriptionsNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { getUsers } from "../../../../../redux/slices/home/navbarSlice";
import SubscriberNavItem from "./SubscriberNavItem/SubscriberNavItem";
import Loading from "../../../../ui/atoms/Loading/Loading";


interface PropsType {
	login?: boolean,
	display?: boolean
}

const SubscriptionsNavbar: React.FC<PropsType> = ({ display }) => {
	const [show, setShow] = useState<boolean>(false);

	const { users, subscribers, ...state } = useAppSelector(state => state.navbar);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch])

	const handleClickBtn = (): void => { setShow(!show) }

	return (
		<div className={`subscription-navbar${display ? ' dnone' : ''}`}>
			<h2 className="subscription-navbar__title">
				{state.titleSubs}
			</h2>
			<div className={`subscription-navbar__list-inner${show ? ' show' : ''}`}>
				<div className="subscription-navbar__list">
					{
						subscribers?.map(el => (
							<SubscriberNavItem
								key={el.uid}
								uid={el.uid}
								name={`${el.firstName} ${el.lastName}`}
								imgSrc={el.imageUrl}
							/>
						))
					}
				</div>
			</div>
			<button
				className="subscription-navbar__show-btn"
				onClick={handleClickBtn}
			>
				<span>{state.titleSubsBtn}</span>
			</button>
		</div>
	)
}

export default SubscriptionsNavbar;