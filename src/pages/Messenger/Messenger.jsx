import { useSelector } from 'react-redux';
import { StyledMessengerPage } from './Messenger.style';
import Header from '../../components/Header/Header';
import Conversation from '../../components/Conversation/Conversation';
import Message from '../../components/Message/Message';
import ChatOnline from '../../components/ChatOnline/ChatOnline';

import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState } from 'react';
import { getUserConversations } from '../../api/conversation';
import { getMessages, newMessage } from '../../api/message';
const Messenger = () => {
  const { user } = useSelector((state) => state.auth.user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const scrollRef = useRef();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      setIsDisabled(false);
    }
  };

  const handleSubmit = async () => {
    const data = {
      conversationId: currentChat._id,
      sender: user._id,
      text: input,
    };

    const response = await newMessage(data);
    setMessages([...messages, response]);
    setInput('');
    setIsDisabled(true);
  };

  useEffect(() => {
    getUserConversations(user._id).then((conversations) => setConversations(conversations));
  }, []);
  useEffect(() => {
    if (currentChat) {
      getMessages(currentChat._id).then((messages) => setMessages(messages));
    }
  }, [currentChat]);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  return (
    <>
      <Header />
      <StyledMessengerPage className='messenger'>
        <div className='chat__menu'>
          <div className='menu__wrapper'>
            <h2 className='menu__title'>Chats</h2>
            <div className='menu__search'>
              <SearchIcon className='search__icon' />
              <input className='menu__input' type='text' placeholder='Search messenger' />
            </div>

            {conversations.length > 0 &&
              conversations.map((conversation) => {
                return (
                  <div onClick={() => setCurrentChat(conversation)} key={conversation._id}>
                    <Conversation className='conversation' conversation={conversation} />
                  </div>
                );
              })}
          </div>
        </div>
        <div className='chat__box'>
          {currentChat ? (
            <>
              <div className='chat-box__wrapper'>
                <div className='chat-box__top'>
                  {messages.length > 0 &&
                    messages.map((message) => (
                      <div ref={scrollRef}>
                        <Message className='message' own={message.sender._id === user._id} message={message} />
                      </div>
                    ))}
                </div>
                <div className='chat-box__bottom'>
                  <textarea
                    className='chat-box__input'
                    placeholder='Aa'
                    name=''
                    id=''
                    onChange={handleInputChange}
                    value={input}
                  ></textarea>
                  <button className='chat-box__submit' onClick={handleSubmit} disabled={isDisabled}>
                    <SendIcon className='icon' />
                  </button>
                </div>
              </div>
            </>
          ) : (
            <span className='empty__chat'>Start a new conversation</span>
          )}
        </div>
        <div className='chat__online'>
          <div className='online__wrapper'>
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </StyledMessengerPage>
    </>
  );
};

export default Messenger;
