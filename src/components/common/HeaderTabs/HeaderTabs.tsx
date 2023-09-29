import React, { CSSProperties, useEffect, useState } from 'react';
import './HeaderTabs.scss';
import { Link, useParams } from 'react-router-dom';
import { TabLink, UserTabPathTypes } from '../../../redux/slices/userInfo/userInfoSlice';

type HeaderUserTabsPropsType = {
	tabList: TabLink[],
	tabValue?: UserTabPathTypes,
	tabWidth: number,
	handlerUserTabClick?: (value: UserTabPathTypes) => void
}

const HeaderTabs: React.FC<HeaderUserTabsPropsType> = ({ tabList, tabWidth, tabValue, handlerUserTabClick }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const params = useParams();

	const indicatorStyles: CSSProperties = {
		left: `${(tabIndex / tabList.length) * 100}%`,
		width: `calc(100% / ${tabList.length})`
	}
	const listStyles: CSSProperties = {
		gridTemplateColumns: `repeat(${tabList.length}, 1fr)`,
		maxWidth: `${tabWidth * tabList.length}px`
	}


	useEffect(() => {
		let currentParams: string = params['*'];

		tabList.forEach((el, index) => {
			if (currentParams === el.path) {
				setTabIndex(index);
			}
		})
	}, [params]);

	return (
		<div className='header-user-tabs'>
			<div className="header-user-tabs__list" style={listStyles}>
				{
					tabList.map((el, index) => (
						<Link
							to={el.path}
							key={el.id}
							className='header-user-tabs__link'
							onClick={() => { handlerUserTabClick(el.path) }}
							style={tabIndex === index ? { color: '#fff' } : { color: '#777' }}
						>{el.title}</Link>
					))
				}
				<div
					className="header-user-tabs__indicator"
					style={indicatorStyles}></div>
			</div>

		</div>
	)
}

export default HeaderTabs;