import React, { useEffect, useState } from 'react';
import './HeaderUserTabs.scss';
import { useAppSelector } from '../../../../../../hooks/hooks';
import { Link, useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const HeaderUserTabs: React.FC = () => {
	const { tabList } = useAppSelector(state => state.userInfo);
	const [tabIndex, setTabIndex] = useState<number>(0);
	const params = useParams();

	useEffect(() => {
		let currentParams: string = params['*'];

		if (currentParams === 'bio') setTabIndex(1);
		if (currentParams === 'store') setTabIndex(2);
		if (currentParams === 'playlist') setTabIndex(3);

	}, [params]);

	console.log(tabIndex)

	return (
		<div className='header-user-tabs'>
			<div className="header-user-tabs__list">
				{
					tabList.map((el, index) => (
						<Link
							to={el.path}
							key={el.id}
							className='header-user-tabs__link'
							onClick={() => { setTabIndex(index) }}
							style={tabIndex === index ? { color: '#fff' } : { color: '#777' }}
						>{el.title}</Link>
					))
				}
				<div
					className="header-user-tabs__indicator"
					style={{ left: `${(tabIndex / tabList.length) * 100}%` }}></div>
			</div>

		</div>
	)
}

export default HeaderUserTabs;