import React, { useState } from 'react';
import './BioUser.scss';
import ItemBioUser from './ItemBioUser/ItemBioUser';
import SocialBioUser, { SocListType } from './SocialBioUser/SocialBioUser';
import { useAppSelector } from '../../../../../../hooks/hooks';
import { getUserUID } from '../../../../../../utils/getUserUID';
import { NumStrNullType } from '../../../../../../redux/slices/auth/singupSlice';

type BioUserPropsType = {
	userUID: NumStrNullType
}

const BioUser: React.FC<BioUserPropsType> = ({ userUID }) => {
	const { users } = useAppSelector(state => state.users);

	const soc: SocListType = {
		facebook: {
			title: 'Facebook',
			link: users[userUID].facebook
		},
		instagram: {
			title: 'Instagram',
			link: users[userUID].instagram
		},
		twitter: {
			title: 'Twitter',
			link: users[userUID].twitter
		},
		vimeo: {
			title: 'Vimeo',
			link: users[userUID].vimeo
		}
	}

	return (
		<div className='bio-user'>
			<div className="bio-user__body">
				{users[userUID].businessName
					? <ItemBioUser
						title={'Business Name'}
						text={users[userUID].businessName}
						strong={true}
						className='bio-user__item'
					/>
					: <></>
				}
				{users[userUID].address
					? <ItemBioUser
						title={'Address'}
						text={users[userUID].address}
						strong={true}
						className='bio-user__item'
					/>
					: <></>
				}

				{users[userUID].description
					? <ItemBioUser
						title={'About'}
						text={users[userUID].description}
						className='bio-user__item'
					/>
					: <></>
				}
			</div>
			{
				users[userUID].facebook || users[userUID].twitter || users[userUID].vimeo || users[userUID].instagram
					? <SocialBioUser
						title='My social media'
						soc={soc}
					/>
					: <></>

			}
		</div>
	)
}

export default BioUser;