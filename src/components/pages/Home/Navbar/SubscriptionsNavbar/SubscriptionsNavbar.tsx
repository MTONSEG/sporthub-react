import React, { CSSProperties, useEffect, useRef, useState } from "react";
import './SubscriptionsNavbar.scss';
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../../hooks/hooks";
import { getUsers } from "../../../../../redux/slices/home/userSlice";
import SubscriberNavItem from "./SubscriberNavItem/SubscriberNavItem";
import Loading from "../../../../ui/atoms/Loading/Loading";
import { list } from 'firebase/storage';


interface PropsType {
	login?: boolean,
	display?: boolean
}

const SubscriptionsNavbar: React.FC<PropsType> = ({ display }) => {
	const [show, setShow] = useState<boolean>(false);
	const [numSubscribes] = useState<number>(10);
	const [height, setHeight] = useState<string>('auto');
	const listRef = useRef<HTMLDivElement | null>(null);

	const { users, current, subscribes, ...state } = useAppSelector(state => state.users);

	const handleClickBtn = (): void => {
		setShow(!show)
	}

	useEffect(() => {
		if (subscribes.length > numSubscribes) {
			setHeight('84px');
		}
	}, [subscribes])

	return (
		<div className={`subscription-navbar${display ? ' dnone' : ''}`}>
			<h2 className="subscription-navbar__title">
				{state.titleSubs}
			</h2>
			<div
				ref={listRef}
				className={`subscription-navbar__list-inner${show ? ' show' : ''}`}
				style={
					subscribes?.length > numSubscribes && show
						? { maxHeight: listRef.current.scrollHeight }
						: { maxHeight: height}
				}
			>
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
			{
				subscribes?.length > numSubscribes
					? (<button
						className="subscription-navbar__show-btn"
						onClick={handleClickBtn}
					>
						<span>{state.titleSubsBtn}</span>
					</button>
					)
					:
					<></>
			}


		</div >
	)
}

export default SubscriptionsNavbar;