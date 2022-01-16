import { useCallback, useContext, useEffect, useMemo, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EditorState } from 'draft-js';
import Editor from '@draft-js-plugins/editor';
import createMentionPlugin, { defaultSuggestionsFilter } from '@draft-js-plugins/mention';
import createEmojiPlugin from '@draft-js-plugins/emoji';

import PostModalContext from '../../context/PostModalContext';
import { updatePostAsync, createPostAsync, sharePostAsync } from '../../redux/slices/post.slice';

import { Close, LocalOffer, PersonAddAlt1, PhotoLibrary } from '@mui/icons-material';
import { StyledPostModal } from './PostModal.style';
import '@draft-js-plugins/mention/lib/plugin.css';
import '@draft-js-plugins/emoji/lib/plugin.css';

const PostModal = ({ mode }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth.user);
  const { posts } = useSelector((state) => state.post);
  const { isOpen, setIsOpen, postId } = useContext(PostModalContext);
  const [isFileLoaderOpen, setIsFileLoaderOpen] = useState(false);
  const [formData, setFormData] = useState();
  const [contacts, setContacts] = useState([]);
  const [mentions, setMentions] = useState([]);
  const editor = useRef(null);
  const hiddenFileInput = useRef(null);
  const chosenFile = useRef(null);
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [open, setOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(contacts);
  const [file, setFile] = useState();

  const { MentionSuggestions, plugins, EmojiSuggestions } = useMemo(() => {
    const emojiPlugin = createEmojiPlugin({ useNativeArt: true });
    const mentionPlugin = createMentionPlugin();

    const { MentionSuggestions } = mentionPlugin;
    const { EmojiSuggestions } = emojiPlugin;

    const plugins = [mentionPlugin, emojiPlugin];
    return { plugins, MentionSuggestions, EmojiSuggestions };
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setFile(fileUploaded);
    setFormData({ ...formData, file: fileUploaded });
    chosenFile.current.innerHTML = fileUploaded.name;
  };
  const onOpenChange = useCallback((_open) => {
    setOpen(_open);
  }, []);
  const onSearchChange = useCallback(({ value }) => {
    setSuggestions(defaultSuggestionsFilter(value, contacts));
  }, []);

  const currentPost = posts.find((post) => {
    return post._id === postId ? post : null;
  });

  const closeModal = () => {
    return !isOpen ? isOpen : setIsOpen((prevState) => !prevState);
  };

  const handleInputFile = () => {
    setIsFileLoaderOpen((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('userId', user?._id);
    data.append('text', formData?.text);
    formData.file && data.append('file', formData.file, file.name);
    data.append('mentions', JSON.stringify(formData.mentions));

    if (mode === 'Create') {
      dispatch(createPostAsync(data));
    }
    if (mode === 'Edit' && (currentPost.text !== formData.text || currentPost.image !== formData.image)) {
      dispatch(updatePostAsync(formData));
    }
    if (mode === 'Share') {
      dispatch(sharePostAsync(formData));
    }

    setFormData({ userId: '' });
    setIsOpen((prevState) => !prevState);
  };

  const selectMode = () => {
    switch (mode) {
      case 'Edit':
        setFormData({
          text: currentPost.text,
          image: currentPost.image,
          userId: user._id,
          postId,
          mentions: mentions,
        });
        break;
      case 'Create':
        setFormData({
          userId: user._id,
          text: editorState.getCurrentContent().getPlainText(),
          mentions: mentions,
          file,
        });
        break;
      case 'Share':
        setFormData({
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
        setFormData({
          ...formData,
          text: editorState.getCurrentContent().getPlainText(),
        });
      }
      setFormData({
        ...formData,
        text: editorState.getCurrentContent().getPlainText(),
      });
    });
  }, [editorState]);

  useEffect(() => {
    setFormData({ ...formData, mentions: mentions });
    const updatedContacts = contacts.filter((contact) => !mentions.find((mention) => mention.id === contact.id));
    setContacts(updatedContacts);
  }, [mentions]);

  useEffect(() => {
    selectMode();
    setContacts(
      user.contacts.map((contact) => {
        return { avatar: contact.avatar, name: `${contact.firstName} ${contact.lastName}`, id: contact._id };
      })
    );
  }, [mode]);

  return (
    <StyledPostModal>
      <div className='modal__wrapper'>
        <div className='modal__container'>
          <div className='modal__top'>
            <div className='title__container'>
              <h2 className='modal__title'>{`${mode} post`}</h2>
              <button className='modal__close' onClick={closeModal}>
                <Close className='icon' />
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
            <form className='modal__content' id='post-form' onSubmit={handleSubmit} encType='multipart/form-data'>
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
                <>
                  <button onClick={handleClick}>Upload file</button>
                  <input
                    className='modal__image'
                    type='file'
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    id='fileInput'
                    name='image'
                    value={formData?.image}
                    placeholder='Add your photo/video'
                    style={{ display: 'none' }}
                  />
                  <span ref={chosenFile}>No file Chosen </span>
                </>
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
                      <PhotoLibrary className='icon image' onClick={handleInputFile} />
                    </li>
                  )}
                  <li className='actions__item'>
                    <PersonAddAlt1 className='icon person' />
                  </li>
                  <li className='actions__item'>
                    <LocalOffer className='icon tag' />
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
