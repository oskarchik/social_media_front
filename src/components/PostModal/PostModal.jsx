import { useCallback, useContext, useMemo, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPostModal } from './PostModal.style';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PostModalContext from '../../context/PostModalContext';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, { defaultSuggestionsFilter } from '@draft-js-plugins/mention';
import createEmojiPlugin from '@draft-js-plugins/emoji';
import '@draft-js-plugins/mention/lib/plugin.css';
import '@draft-js-plugins/emoji/lib/plugin.css';
import styled from '@emotion/styled';

import CloseIcon from '@mui/icons-material/Close';
import { updatePostAsync, createPostAsync, sharePostAsync } from '../../redux/slices/post.slice';
import { useEffect } from 'react';

const PostModal = ({ mode }) => {
  const myInput = useRef();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);
  const { isOpen, setIsOpen, setMode, postId, setPostId } = useContext(PostModalContext);
  const [isFileLoaderOpen, setIsFileLoaderOpen] = useState(false);
  const [data, setData] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [contacts, setContacts] = useState([]);
  const [content, setContent] = useState('');
  /////////////////////////
  const [mentions, setMentions] = useState([]);
  const editor = useRef(null);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(contacts);
  const ref = useRef(null);

  const { MentionSuggestions, plugins, EmojiSuggestions } = useMemo(() => {
    const emojiPlugin = createEmojiPlugin({ useNativeArt: true });
    const mentionPlugin = createMentionPlugin();

    const { MentionSuggestions } = mentionPlugin;
    const { EmojiSuggestions } = emojiPlugin;

    const plugins = [mentionPlugin, emojiPlugin];
    return { plugins, MentionSuggestions, EmojiSuggestions };
  }, []);

  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, contacts));
  }, []);
  /////////////////////////////////////////

  const currentPost = posts.find((post) => {
    return post._id === postId ? post : null;
  });

  const onInputChange = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
  };

  const closeModal = () => {
    return !isOpen ? isOpen : setIsOpen((prevState) => !prevState);
  };

  const handleInputFile = () => {
    setIsFileLoaderOpen((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'Create') {
      dispatch(createPostAsync(data));
    }
    if (mode === 'Edit' && (currentPost.text !== data.text || currentPost.image !== data.image)) {
      dispatch(updatePostAsync(data));
    }
    if (mode === 'Share') {
      dispatch(sharePostAsync(data));
    }

    setData({ userId: '' });
    setIsOpen((prevState) => !prevState);
  };

  const selectMode = () => {
    switch (mode) {
      case 'Edit':
        setData({
          text: currentPost.text,
          image: currentPost.image,
          userId: user._id,
          postId,
          mentions: mentions,
        });
        break;
      case 'Create':
        setData({
          userId: user._id,
          text: editorState.getCurrentContent().getPlainText(),
          mentions: mentions,
        });
        break;
      case 'Share':
        setData({
          userId: user._id,
          postRef: postId,
          text: '',
        });
        break;
      default:
        return null;
    }
  };

  useEffect(() => {
    contacts.some((contact) => {
      if (editorState.getCurrentContent().getPlainText().indexOf(contact.name) > -1) {
        !mentions.some((mention) => mention.id === contact.id) && setMentions((prev) => [...prev, contact]);
        setData({
          ...data,
          text: editorState.getCurrentContent().getPlainText(),
        });
      }
      setData({
        ...data,
        text: editorState.getCurrentContent().getPlainText(),
      });
    });
  }, [editorState]);

  useEffect(() => {
    setData({ ...data, mentions: mentions });
    setContacts(contacts.filter((contact) => mentions.some((mention) => mention.id !== contact.id)));
  }, [mentions]);

  useEffect(() => {
    selectMode();
    setContacts(
      user.contacts.map((contact) => {
        return { avatar: contact.avatar, name: `${contact.firstName} ${contact.lastName}`, id: contact._id };
      })
    );
  }, []);

  return (
    <StyledPostModal>
      <div className='modal__wrapper'>
        <div className='modal__container'>
          <div className='modal__top'>
            <div className='title__container'>
              <h2 className='modal__title'>{`${mode} post`}</h2>
              <button className='modal__close' onClick={closeModal}>
                <CloseIcon className='icon' />
              </button>
            </div>
          </div>
          <hr className='modal__hr' />
          <div className='modal__center'>
            <div className='modal__user-info'>
              <div className='avatar'>
                <img
                  className='profile__picture'
                  src={user?.avatar ? user.avatar : '/assets/profile/default_profile.png'}
                  alt='user'
                />
              </div>
              <p className='user__name'>
                {user.firstName} {user.lastName}
              </p>
            </div>
            <form className='modal__content' id='post-form' onSubmit={handleSubmit}>
              <div
                className='editor'
                onClick={() => {
                  editor.current && editor.current.focus();
                }}
              >
                <Editor ref={editor} editorState={editorState} onChange={setEditorState} plugins={plugins} />
                <MentionSuggestions
                  open={open}
                  onOpenChange={onOpenChange}
                  suggestions={contacts}
                  onSearchChange={onSearchChange}
                />
                <EmojiSuggestions />
              </div>
              {isFileLoaderOpen && (
                <input
                  className='modal__image'
                  type='text'
                  onChange={onInputChange}
                  name='image'
                  value={data?.image}
                  placeholder='Add your photo/video'
                />
              )}
              {mode === 'Share' && currentPost ? (
                <div className='shared__post'>
                  {currentPost.image && (
                    <div className='image__container'>
                      <img className='shared__image' src={currentPost.image} alt='post' />
                    </div>
                  )}
                  {currentPost.text && <div className='shared__text'>{currentPost.text}</div>}
                </div>
              ) : null}
              <div className='modal__actions'>
                <span className='actions__text'>Add to your post</span>
                <ul className='actions__list'>
                  {mode !== 'Share' && (
                    <li className='actions__item'>
                      <PhotoLibraryIcon className='icon image' onClick={handleInputFile} />
                    </li>
                  )}
                  <li className='actions__item'>
                    <PersonAddAlt1Icon className='icon person' />
                  </li>
                  <li className='actions__item'>
                    <LocalOfferIcon className='icon tag' />
                  </li>
                </ul>
              </div>
              <div className='modal__bottom'>
                <button className='modal__btn' type='submit' form='post-form'>
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StyledPostModal>
  );
};

export default PostModal;
