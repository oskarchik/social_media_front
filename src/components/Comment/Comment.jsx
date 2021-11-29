import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledComment } from './Comment.style';

import { likeUnlikeCommentAsync } from '../../redux/slices/comment.slice';
import { commentACommentAsync, deleteCommentAsync } from '../../redux/slices/post.slice';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';

const Comment = (props) => {
  const { comment } = props;
  const { user } = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const [likeSCommentCounter, setLikeSCommentCounter] = useState(comment.likes?.length);
  const [isInputOpen, setIsInputOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLiked, setIsLiked] = useState(comment.likes?.some((like) => like._id === user._id) ? true : false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const handleLikes = (commentId, userId) => {
    const data = { commentId, userId };
    dispatch(likeUnlikeCommentAsync(data));
    isLiked
      ? setLikeSCommentCounter((prevState) => prevState - 1)
      : setLikeSCommentCounter((prevState) => prevState + 1);
    setIsLiked((prevState) => !prevState);
  };

  const handleReplayInput = () => {
    setIsInputOpen((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { commentId: comment._id, userId: user._id, text: input };
    dispatch(commentACommentAsync(data));
    setInput('');
    setIsInputOpen((prevState) => !prevState);
  };

  const deleteComment = (commentId, userId) => {
    const data = { commentId, userId };
    dispatch(deleteCommentAsync(data));
  };
  return (
    <StyledComment style={props.style}>
      <div className='old-comments__comment'>
        <div className='old-comments__avatar'>
          <img className='user__avatar' src={comment.userId?.avatar} alt='' />
        </div>
        <div className='old-comments__content'>
          <span className='old-comments__user-name'>
            {comment.userId?.firstName} {comment.userId?.lastName}
          </span>
          <span className='old-comments__text'>
            {comment.text}{' '}
            {likeSCommentCounter > 0 ? (
              <div className='comment__badge'>
                <span className='badge__icon'>
                  <ThumbUpIcon className='icon' />
                </span>
                <span className='badge__counter'>{likeSCommentCounter}</span>
              </div>
            ) : null}
          </span>
        </div>
      </div>
      <div className='old-comments__actions'>
        <span
          className='action action--like'
          onClick={() => handleLikes(comment._id, user._id)}
          style={{ color: isLiked ? '#1877f2' : null }}
        >
          Like
        </span>
        <span className='action action--reply' onClick={handleReplayInput}>
          Reply
        </span>
        <span className='action action--delete' onClick={() => deleteComment(comment._id, user._id)}>
          Delete
        </span>
      </div>
      {isInputOpen && (
        <div className='reply-comment__container'>
          <div className='reply-comment__avatar'>
            <img className='reply-user__avatar' src={user.avatar} alt='user' />
          </div>
          <form className='reply-comment__content'>
            <input
              className='reply-comment__input'
              type='text'
              name='text'
              placeholder={`Replay to ${comment.userId.firstName} ${comment.userId.lastName}...`}
              onChange={handleInputChange}
              value={input}
            />
            <button className='icon' type='submit' onClick={handleSubmit}>
              <SendIcon />
            </button>
          </form>
        </div>
      )}
      <div className='subcomment'>
        {comment.comments?.map((comment) => {
          return <Comment comment={comment} key={comment.createdAt} style={{ paddingLeft: '20px' }} />;
        })}
      </div>
    </StyledComment>
  );
};

export default Comment;
