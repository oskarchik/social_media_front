import React from 'react';

import { Card, Header, Post } from '../../components';

import { StyledSearch } from './Search.style';

const Search = (props) => {
  const { users, contacts, posts } = props.location.state.data;
  return (
    <>
      <Header />
      <StyledSearch className='search-page__container'>
        {(contacts.length > 0 || users.length > 0) && (
          <>
            <div className='people__container'>
              <h3 className='title'>People</h3>
              {contacts.length > 0 && (
                <div className='contacts__wrapper'>
                  {contacts.map((contact, i) => {
                    return i === contacts.length - 1 ? (
                      <Card contact={contact} key={contact._id} index={i} last={true} />
                    ) : (
                      <Card contact={contact} key={contact._id} index={i} last={false} />
                    );
                  })}
                </div>
              )}
              {contacts.length < 1 && users.length > 0 && (
                <div className='contacts__wrapper'>
                  {users.map((person, i) => {
                    return i === users.length - 1 ? (
                      <Card person={person} key={person._id} index={i} last={true} />
                    ) : (
                      <Card person={person} key={person._id} index={i} last={false} />
                    );
                  })}
                </div>
              )}
            </div>
            {users.length > 0 && (
              <div className='users__wrapper'>
                {users.map((person, i) => {
                  return i === users.length - 1 ? (
                    <Card person={person} key={person._id} index={i} last={true} />
                  ) : (
                    <Card person={person} key={person._id} index={i} last={false} />
                  );
                })}
              </div>
            )}
          </>
        )}
        {posts && (
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
