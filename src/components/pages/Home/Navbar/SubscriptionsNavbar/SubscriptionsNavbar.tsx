import React, { useEffect, useState } from "react";
import './SubscriptionsNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { getUsers } from "../../../../../redux/slices/home/userSlice";
import SubscriberNavItem from "./SubscriberNavItem/SubscriberNavItem";
import Loading from "../../../../ui/atoms/Loading/Loading";


interface PropsType {
	login?: boolean,
	display?: boolean
}

const SubscriptionsNavbar: React.FC<PropsType> = ({ display }) => {
	const [show, setShow] = useState<boolean>(false);

	const { users, current, subscribes, ...state } = useAppSelector(state => state.users);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// dispatch(getUsers());
	}, [dispatch])

	const handleClickBtn = (): void => { setShow(!show) }


	if (subscribes) console.log(subscribes);

	return (
		<div className={`subscription-navbar${display ? ' dnone' : ''}`}>
			<h2 className="subscription-navbar__title">
				{state.titleSubs}
			</h2>
			<div className={`subscription-navbar__list-inner${show ? ' show' : ''}`}>
				<div className="subscription-navbar__list">
					{
						subscribes?.map(el => (
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