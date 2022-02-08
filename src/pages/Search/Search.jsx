import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Post } from '../../components';

import { StyledSearch } from './Search.style';

const Search = (props) => {
  const { user } = useSelector((state) => state.user.user);
  const { users, contacts, posts } = props.location.state.data;

  const filteredUsers = users?.filter((u) => u._id !== user._id);
  const totalUsers = [...contacts, ...filteredUsers];

  return (
    <>
      <StyledSearch className='search-page__container'>
        {(contacts?.length > 0 || filteredUsers?.length > 0) && (
          <>
            {contacts.length > 0 && filteredUsers.length < 1 && (
              <>
                <div className='people__container'>
                  <h3 className='title'>People</h3>
                  <div className='contacts__wrapper'>
                    {contacts.map((contact, i) => {
                      return i === contacts.length - 1 ? (
                        <Card contact={contact} key={contact._id} index={i} last={true} />
                      ) : (
                        <Card contact={contact} key={contact._id} index={i} last={false} />
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            {contacts.length > 0 && users.length > 0 && (
              <>
                <div className='people__container'>
                  <h3 className='title'>People</h3>
                  <div className='contacts__wrapper'>
                    {totalUsers.map((person, i) => {
                      return i === totalUsers.length - 1 ? (
                        <Card
                          contact={contacts.find((contact) => contact._id === person._id)}
                          person={filteredUsers.find((user) => user._id === person._id)}
                          key={person._id}
                          index={i}
                          last={true}
                        />
                      ) : (
                        <Card
                          contact={contacts.find((contact) => contact._id === person._id)}
                          person={filteredUsers.find((user) => user._id === person._id)}
                          key={person._id}
                          index={i}
                          last={false}
                        />
                      );
                    })}
                  </div>
                </div>
              </>
            )}
            {contacts.length < 1 && filteredUsers.length > 0 && (
              <>
                <div className='people__container'>
                  <h3 className='title'>People</h3>
                  <div className='users__wrapper'>
                    {filteredUsers.map((person, i) => {
                      return i === filteredUsers.length - 1 ? (
                        <Card person={person} key={person._id} index={i} last={true} />
                      ) : (
                        <Card person={person} key={person._id} index={i} last={false} />
                      );
                    })}
                  </div>
                </div>
              </>
            )}
          </>
        )}
        {posts.length > 0 && (
          <div className='posts__wrapper'>
            {posts.map((post) => {
              return <Post post={post} key={post._id} />;
            })}
          </div>
        )}
      </StyledSearch>
    </>
  );
};

export default Search;
