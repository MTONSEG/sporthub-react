import React from 'react';
import './BioUser.scss';
import ItemBioUser from './ItemBioUser/ItemBioUser';
import SocialBioUser, { SocListType } from './SocialBioUser/SocialBioUser';

let bio: string = `Praesent ultricies lacus in ligula volutpat feugiat. In hac habitasse platea dictumst. In hac habitasse platea dictumst. Fusce luctus justo eget nisi hendrerit, quis aliquam arcu porta. Cras ultricies, elit sit amet cursus consectetur, risus felis ullamcorper nulla, ut scelerisque sapien lorem non sem. Integer vestibulum ornare ligula, a placerat lectus volutpat ultrices. Aliquam commodo malesuada purus a mollis.Vestibulum pulvinar aliquam libero eu consequat. 
Cras massa orci, ultrices Sed scelerisque id, semper vel neque. Proin a turpis quis nibh cursus hendrerit sit amet vel libero. Nullam sit amet laoreet ante. Mauris sit amet mi vitae arcu dignissim porttitor et in arcu. Nullam eleifend molestie arcu, pretium fermentum orci feugiat eget. Integer dapibus tincidunt ipsum, at rutrum magna rutrum at. Quisque pretium convallis vestibulum.`


const soc: SocListType = {
	facebook: {
		title: 'Facebook',
		link: '#'
	},
	instagram: {
		title: 'Instagram',
		link: '#'
	},
	twitter: {
		title: 'Twitter',
		link: '#'
	},
}

const BioUser: React.FC = () => {
	return (
		<div className='bio-user'>
			<div className="bio-user__body">
				<ItemBioUser
					title={'Business Name'}
					text={'Business Name'}
					strong={true}
					className='bio-user__item'
				/>
				<ItemBioUser
					title={'Address'}
					text={'4708 Ruecker Wall, Kassandratown, HI 97729'}
					strong={true}
					className='bio-user__item'
				/>
				<ItemBioUser
					title={'About'}
					text={bio}
					className='bio-user__item'
				/>
			</div>
			<SocialBioUser
				title='My social media'
				soc={soc}
			/>
		</div>
	)
}

export default BioUser;