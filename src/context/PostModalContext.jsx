import { createContext, useState } from 'react';

const PostModalContext = createContext();

export const PostModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState('');
  const [postId, setPostId] = useState('');
  return (
    <PostModalContext.Provider value={{ isOpen, setIsOpen, mode, setMode, postId, setPostId }}>
      {children}
    </PostModalContext.Provider>
  );
};

export default PostModalContext;
