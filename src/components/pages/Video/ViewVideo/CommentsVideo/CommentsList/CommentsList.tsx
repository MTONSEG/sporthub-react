import React from 'react';
import './CommentsList.scss';
import CommentsItem from '../CommentsItem/CommentsItem';
import { Comment } from '../../../../../../redux/slices/video/videoSlice';
import { useAppSelector } from '../../../../../../hooks/hooks';

type CommentsListPropsType = {
	videoUID: string | number,
	list: Comment[]
}

const CommentsList: React.FC<CommentsListPropsType> = ({ videoUID, list }) => {
	const { users } = useAppSelector(state => state.users);

	return (
		<ul className='list-comments'>
			{
				list?.map(el => (
					<CommentsItem
						key={el.uid}
						name={`${users[el.author].firstName} ${users[el.author].lastName}  `}
						comment={el.text}
						photoURL={`${users[el.author].photoURL} `}
						like={el.like}
						dislike={el.dislike}
					/>
				))
			}

		</ul>
	)
}

export default CommentsList;