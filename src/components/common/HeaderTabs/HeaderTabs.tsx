import React, { CSSProperties, useEffect, useState } from 'react';
import './HeaderTabs.scss';
import { Link, useParams } from 'react-router-dom';
import { TabLink, UserTabPathTypes } from '../../../redux/slices/userInfo/userInfoSlice';

type HeaderUserTabsPropsType = {
	tabList: TabLink[],
	tabValue?: UserTabPathTypes,
	tabWidth: number,
	tabMobWidth?: boolean,
	handlerTabClick?: (value: UserTabPathTypes) => void
}

const HeaderTabs: React.FC<HeaderUserTabsPropsType> = ({ tabList, tabWidth, tabValue, handlerTabClick, tabMobWidth }) => {
	const [tabIndex, setTabIndex] = useState<number>(0);
	const [maxWidth, setMaxWidth] = useState<string>((tabWidth * tabList.length) + 'px');
	const params = useParams();

	const indicatorStyles: CSSProperties = {
		left: `${(tabIndex / tabList.length) * 100}%`,
		width: `calc(100% / ${tabList.length})`
	}
	const listStyles: CSSProperties = {
		gridTemplateColumns: `repeat(${tabList.length}, 1fr)`,
		maxWidth,

	}

	useEffect(() => {
		let currentParams: string = params['*'];

		if (tabMobWidth) {
			window.addEventListener('resize', () => {
				if (window.innerWidth > 576) {
					setMaxWidth((tabWidth * tabList.length) + 'px');
				} else {
					setMaxWidth(100 + '%');
				}
			})
		} else {
			setMaxWidth((tabWidth * tabList.length) + 'px');
		}

		tabList.forEach((el, index) => {
			if (tabValue === el.value) {
				setTabIndex(index);
			}
		})
	}, [params]);

	return (
		<div className='header-user-tabs'>
			<ul className="header-user-tabs__list" style={listStyles}>
				{
					tabList.map((el, index) => (
						<Link
							to={tabMobWidth ? '#' : el.value}
							key={el.id}
							className='header-user-tabs__link'
							onClick={() => { handlerTabClick(el.value) }}
							style={tabIndex === index ? { color: '#fff' } : { color: '#777' }}
						>{el.title}</Link>
					))
				}
				<div
					className="header-user-tabs__indicator"
					style={indicatorStyles}></div>
			</ul>

		</div>
	)
}

export default HeaderTabs;