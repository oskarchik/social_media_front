import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import RequestCard from '../../components/RequestCard/RequestCard';

import { StyledFriendsPage } from './Friends.style';
import { ArrowForwardIos, PeopleAlt, PersonAddAlt1 } from '@mui/icons-material';

const Friends = () => {
  const { user } = useSelector((state) => state.user.user);
  const [filter, setFilter] = useState(user.receivedRequests.length < 1 ? 'contacts' : 'requests');
  const handleClick = (e) => {
    const data = e.currentTarget.dataset.id;
    setFilter(data);
  };

  useEffect(() => {
    if (user.contacts.length < 1) {
      setFilter('requests');
    }
    if (user.receivedRequests.length < 1) {
      setFilter('contacts');
    }
  }, [user]);

  return (
    <>
      <StyledFriendsPage className='friends-page'>
        <aside className='friends__sidebar'>
          <h2>Friends</h2>
          <ul className='icons__list'>
            <li className='icons__item ' onClick={handleClick} data-id='requests'>
              <PersonAddAlt1 className='icon' />
              <span className='icons__text'>Friend requests</span>
              <div className='arrow'>
                <ArrowForwardIos />
              </div>
            </li>
            <li className='icons__item' onClick={handleClick} data-id='contacts'>
              <PeopleAlt className='icon' />
              <span className='icons__text'>All friends</span>
              <div className='arrow'>
                <ArrowForwardIos />
              </div>
            </li>
            <li className='icons__item'></li>
          </ul>
        </aside>
        <div className='friends__container'>
          <div className='friends__top'>
            <h3 className='friends__title'>{filter === 'contacts' ? 'Friends' : 'Friend requests'}</h3>
          </div>
          <div className='friends__grid'>
            {user && filter === 'requests'
              ? user?.receivedRequests?.map((request) => {
                  return <RequestCard request={request} key={request._id} />;
                })
              : user?.contacts?.map((contact) => {
                  return <RequestCard contact={contact} key={contact._id} isContact={true} />;
                })}
          </div>
        </div>
      </StyledFriendsPage>
    </>
  );
};

export default Friends;
