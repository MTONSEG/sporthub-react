import React, { useState } from 'react';
import './BioUser.scss';
import ItemBioUser from './ItemBioUser/ItemBioUser';
import SocialBioUser, { SocListType } from './SocialBioUser/SocialBioUser';
import { useAppSelector } from '../../../../../../hooks/hooks';






const BioUser: React.FC = () => {
	const { user } = useAppSelector(state => state.userInfo);
	const soc: SocListType = {
		facebook: {
			title: 'Facebook',
			link: user.facebook
		},
		instagram: {
			title: 'Instagram',
			link: user.instagram
		},
		twitter: {
			title: 'Twitter',
			link: user.twitter
		},
		vimeo: {
			title: 'Vimeo',
			link: user.vimeo
		}
	}

	return (
		<div className='bio-user'>
			<div className="bio-user__body">
				{user.businessName
					? <ItemBioUser
						title={'Business Name'}
						text={user.businessName}
						strong={true}
						className='bio-user__item'
					/>
					: <></>
				}
				{user.address
					? <ItemBioUser
						title={'Address'}
						text={user.address}
						strong={true}
						className='bio-user__item'
					/>
					: <></>
				}

				{user.description
					? <ItemBioUser
						title={'About'}
						text={user.description}
						className='bio-user__item'
					/>
					: <></>
				}
			</div>
			{
				user.facebook || user.twitter || user.vimeo || user.instagram
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