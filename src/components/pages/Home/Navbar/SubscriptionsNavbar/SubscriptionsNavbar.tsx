import React, { useEffect, useRef, useState } from "react";
import './SubscriptionsNavbar.scss';
import { useAppSelector } from "../../../../../hooks/hooks";
import SubscriberNavItem from "./SubscriberNavItem/SubscriberNavItem";


interface PropsType {
	login?: boolean,
	display?: boolean
}

const SubscriptionsNavbar: React.FC<PropsType> = ({ display }) => {
	const [show, setShow] = useState<boolean>(false);
	const [numSubscribes] = useState<number>(10);
	const [height, setHeight] = useState<string>('auto');
	const listRef = useRef<HTMLDivElement | null>(null);

	const { users, subscribeList, ...state } = useAppSelector(state => state.users);

	const handleClickBtn = (): void => {
		setShow(!show)
	}

	useEffect(() => {
		if (subscribeList.length > numSubscribes) {
			setHeight(44 * 7 + 'px');
		}

	}, [subscribeList])

	return (
		<div className={`subscription-navbar${display ? ' dnone' : ''}`}>
				<h2 className="subscription-navbar__title">
					{state.titleSubs}
				</h2>
				<div
					ref={listRef}
					className={`subscription-navbar__list-inner${show ? ' show' : ''}`}
					style={
						subscribeList?.length > numSubscribes && show
							? { maxHeight: listRef.current.scrollHeight }
							: { maxHeight: height }
					}
				>
					{
						subscribeList?.map(el => (
							<SubscriberNavItem
								key={el.uid}
								uid={el.uid}
								name={`${el.firstName} ${el.lastName}`}
								imgSrc={el.photoURL}
							/>
						))
					}
				</div>
				{
					subscribeList?.length > numSubscribes
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