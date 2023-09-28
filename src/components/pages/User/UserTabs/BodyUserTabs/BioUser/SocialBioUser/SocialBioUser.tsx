import React from 'react';
import './SocialBioUser.scss';
import { Icon } from '../../../../../../ui/atoms/Icon/Icon';


export type SocType = {
	title: string,
	link: string
};
export type SocListType = {
	facebook: SocType,
	instagram: SocType,
	twitter: SocType,
	vimeo: SocType
}
type SocialBioUser = {
	title: string,
	soc: SocListType
}
const SocialBioUser: React.FC<SocialBioUser> = ({ title, soc }) => {

	return (
		<div className='social-bio-user'>
			<h2 className="social-bio-user__title">{title}</h2>
			<div className="social-bio-user__list">
				{
					soc.facebook.link
						? <a href={soc.facebook.link} className="social-bio-user__link">
							<Icon id='facebook' className='social-bio-user__icon' />
							<span>{soc.facebook.title}</span>
						</a>
						: <></>
				}
				{
					soc.instagram.link
						? <a href={soc.instagram.link} className="social-bio-user__link">
							<Icon id='instagram' className='social-bio-user__icon' />
							<span>{soc.instagram.title}</span>
						</a>
						: <></>
				}
				{
					soc.twitter.link
						? <a href={soc.twitter.link} className="social-bio-user__link">
							<Icon id='twitter' className='social-bio-user__icon social-bio-user__icon_twitter' />
							<span>{soc.twitter.title}</span>
						</a>
						: <></>
				}
				{
					soc.vimeo.link
						? <a href={soc.vimeo.link} className="social-bio-user__link">
							<Icon id='vimeo' className='social-bio-user__icon social-bio-user__icon_vimeo' />
							<span>{soc.vimeo.title}</span>
						</a>
						: <></>
				}
			</div>
		</div>
	)
}

export default SocialBioUser;