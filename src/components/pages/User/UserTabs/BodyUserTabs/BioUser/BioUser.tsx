import React, { useState } from 'react';
import './BioUser.scss';
import ItemBioUser from './ItemBioUser/ItemBioUser';
import SocialBioUser, { SocListType } from './SocialBioUser/SocialBioUser';
import { useAppSelector } from '../../../../../../hooks/hooks';
import { getUserUID } from '../../../../../../utils/getUserUID';



const BioUser: React.FC = () => {
	const { users } = useAppSelector(state => state.users);

	const soc: SocListType = {
		facebook: {
			title: 'Facebook',
			link: users[getUserUID().uid].facebook
		},
		instagram: {
			title: 'Instagram',
			link: users[getUserUID().uid].instagram
		},
		twitter: {
			title: 'Twitter',
			link: users[getUserUID().uid].twitter
		},
		vimeo: {
			title: 'Vimeo',
			link: users[getUserUID().uid].vimeo
		}
	}
	
	return (
		<div className='bio-user'>
			<div className="bio-user__body">
				{users[getUserUID().uid].businessName
					? <ItemBioUser
						title={'Business Name'}
						text={users[getUserUID().uid].businessName}
						strong={true}
						className='bio-user__item'
					/>
					: <></>
				}
				{users[getUserUID().uid].address
					? <ItemBioUser
						title={'Address'}
						text={users[getUserUID().uid].address}
						strong={true}
						className='bio-user__item'
					/>
					: <></>
				}

				{users[getUserUID().uid].description
					? <ItemBioUser
						title={'About'}
						text={users[getUserUID().uid].description}
						className='bio-user__item'
					/>
					: <></>
				}
			</div>
			{
				users[getUserUID().uid].facebook || users[getUserUID().uid].twitter || users[getUserUID().uid].vimeo || users[getUserUID().uid].instagram
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