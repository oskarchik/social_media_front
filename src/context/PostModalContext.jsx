import { createContext, useState } from 'react';

const PostModalContext = createContext();

export const PostModalProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [postId, setPostId] = useState('');
  return (
    <PostModalContext.Provider value={{ isOpen, setIsOpen, isEditing, setIsEditing, postId, setPostId }}>
      {children}
    </PostModalContext.Provider>
  );
};

export default PostModalContext;
