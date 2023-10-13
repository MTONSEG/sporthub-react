import React, { useEffect, useState } from 'react';
import './ViewPlaylist.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { PlaylistType, clearPlaylist, deletePlaylist, getCurrentPlaylist, getPlaylist, setEditPlaylist } from '../../../../redux/slices/video/videoSlice';
import ContainerProfile from '../../../containers/ContainerProfile/ContainerProfile';
import VideoItem from '../../../common/VideoItem/VideoItem';
import Loading from '../../../ui/atoms/Loading/Loading';
import Container from '../../../containers/Container/Container';
import { ButtonPopup } from '../../../ui/buttons/ButtonPopup/ButtonPopup';
import { getCreateDate } from '../../../../utils/getCreateDate';
import { Title } from '../../../ui/atoms/Title/Title';
import { showDescriptionPlaylist } from '../../../../utils/showDescriptionPlaylist';
import PopupOption from '../../../ui/atoms/PopupOption/PopupOption';
import ItemPopupOption from '../../../ui/atoms/PopupOption/ItemPopupOption/ItemPopupOption';
import { EDIT_PLAYLIST_VIDEO_ROUTE, PLAYLIST_VIDEO_ROUTE } from '../../../../routes/routes';

type ViewPlaylistPropsType = {}

const ViewPlaylist: React.FC<ViewPlaylistPropsType> = () => {
	const { uid } = useParams();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { playlistView, ...state } = useAppSelector(state => state.videos);
	const [description, setDescription] = useState<string>();

	useEffect((): void => {
		dispatch(getCurrentPlaylist(uid));
		dispatch(setEditPlaylist(true));
	}, [])

	const handleShowClick = () => {
		if (description) {
			setDescription('');
		} else {
			setDescription(playlistView.description);
		}
	}
	const handleDelClick = (): void => {
		dispatch(deletePlaylist(uid));
	}

	const handleEditClick = (): void => {
		dispatch(clearPlaylist());
	}

	if (!playlistView) return <Loading />

	return (
		<div className='view-playlist'>
			<ContainerProfile maxWidth='920px' pb0>
				<>
					<div className="view-playlist__header">
						<Title className='view-playlist__title' text={playlistView.title} />
						<PopupOption>
							<>
								<ItemPopupOption
									path={`${EDIT_PLAYLIST_VIDEO_ROUTE}/${uid}`}
									text='Edit'
									handleClick={handleEditClick} />
								<ItemPopupOption
									path={PLAYLIST_VIDEO_ROUTE}
									text='Delete'
									handleClick={handleDelClick} />
							</>
						</PopupOption>
					</div>
					<div className="view-playlist__body">
						<p className="view-playlist__amount-video">
							{`${playlistView.list?.length} videos`}
						</p>
						<div className="view-playlist__info">
							<p className="view-playlist__info-item">
								{playlistView.views} views
							</p>
							<p className="view-playlist__info-item">
								{getCreateDate(playlistView.date)}
							</p>
						</div>
						<p className="view-playlist__description">
							{
								description
									? description
									: showDescriptionPlaylist(playlistView.description, 30)
							}
							<button
								onClick={handleShowClick}
								className='view-playlist__description-btn'
							>
								{
									description
										? 'Hide more'
										: 'Show more'
								}

							</button>
						</p>
					</div>
				</>
			</ContainerProfile >
			<div className="view-playlist__list-wrap">
				<Container>
					<div className={`view-playlist__list ${playlistView?.list?.length < 3 ? 'small-grid':''}`}>
						{
							playlistView?.list?.map(el => (
								<VideoItem
									key={el.uid}
									video={el}
								/>
							))
						}
					</div>
				</Container>
			</div>

		</div>
	)
}

export default ViewPlaylist;