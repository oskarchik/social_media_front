import { useSelector } from 'react-redux';
import { StyledMessengerPage } from './Messenger.style';
import Header from '../../components/Header/Header';
import Conversation from '../../components/Conversation/Conversation';
import Message from '../../components/Message/Message';
import ChatOnline from '../../components/ChatOnline/ChatOnline';
import { io } from 'socket.io-client';
import SearchIcon from '@mui/icons-material/Search';
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { getUserConversations } from '../../api/conversation';
import { getMessages, newMessage } from '../../api/message';
import { useSocket } from '../../hooks/useSocket';
import Spinner from '../../components/Spinner/Spinner';
import { socket } from '../../components/Socket/Socket';

const Messenger = (props) => {
  const { user } = useSelector((state) => state.auth.user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  // const { socket } = useSocket();
  const contact = props?.location?.state?.data;
  // console.log(props.location.state.data);
  // if (contact) {
  //   console.log('contact', contact);
  // }

  const scrollRef = useRef();
  const [hasNotification, setHasNotification] = useState(true);
  const [chatter, setChatter] = useState(null);
  const [scroll, setScroll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value.length > 0) {
      setIsDisabled(false);
    }
  };
  useEffect(() => {
    if (socket.disconnected) {
      socket.connect('ws://localhost:5500', {
        withCredentials: true,
        forceNew: true,
      });
    }
    socket.emit('addUser', user._id);
    socket.on('getUsers', (users) => {
      setOnlineFriends(user?.contacts?.filter((contact) => users.some((user) => user.userId === contact._id)));
    });
    return () => socket.disconnect();
  }, [socket]);

  useEffect(() => {
    socket.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  useEffect(() => {
    if (contact) {
      setCurrentChat(conversations?.find((conversation) => conversation.members.includes(contact._id)));
    }
  }, [contact, conversations]);
  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    getUserConversations(user._id).then((conversations) => setConversations(conversations));
  }, [user._id]);

  useEffect(() => {
    if (currentChat) {
      setLoading(true);
      getMessages(currentChat._id).then((messages) => setMessages(messages));
      setLoading(false);
    }
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      conversationId: currentChat._id,
      sender: user._id,
      text: input,
    };
    const response = await newMessage(data);
    setMessages([...messages, response]);
    setInput('');
    setIsDisabled(true);

    const receiverId = currentChat.members.find((member) => member !== user._id);

    socket.emit('sendMessage', {
      senderId: user._id,
      receiverId,
      text: input,
    });
    setScroll(!scroll);
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, scroll]);

  return (
    <>
      <Header socket={socket} />
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
                  <div onClick={() => setCurrentChat(conversation)} key={conversation.createdAt}>
                    <Conversation className='conversation' conversation={conversation} setChatter={setChatter} />
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
                  {messages.length > 0 ? (
                    messages.map((message) => (
                      <div ref={scrollRef} key={message.createdAt}>
                        <Message
                          className='message'
                          own={message.sender._id === user._id}
                          message={message}
                          socket={socket}
                        />
                      </div>
                    ))
                  ) : (
                    <Spinner />
                  )}
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
            <h2 className='online__friend'>Friends online</h2>
            <ChatOnline
              onlineUsers={onlineUsers}
              currentUser={user}
              setCurrentChat={setCurrentChat}
              onlineFriends={onlineFriends}
            />
          </div>
        </div>
      </StyledMessengerPage>
    </>
  );
};

export default Messenger;
