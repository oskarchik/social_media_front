import { createContext, useState } from 'react';

const PostModalContext = createContext();

export const PostModalProvider = ({ children }) => {
  const [isOpenPostModal, setIsOpenPostModal] = useState(false);
  const [mode, setMode] = useState('');
  const [postId, setPostId] = useState('');
  return (
    <PostModalContext.Provider value={{ isOpenPostModal, setIsOpenPostModal, mode, setMode, postId, setPostId }}>
      {children}
    </PostModalContext.Provider>
  );
};

export default PostModalContext;
