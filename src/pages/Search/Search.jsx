import React from 'react';
import Card from '../../components/Card/Card';
import { StyledSearch } from './Search.style';
import Header from '../../components/Header/Header';
import Post from '../../components/Post/Post';
const Search = (props) => {
  const { users, contacts, posts } = props.location.state.data;
  console.log(posts);
  console.log(props);
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
                  {contacts.map((user, i) => {
                    return i === contacts.length - 1 ? (
                      <Card user={user} key={user._id} index={i} last={true} />
                    ) : (
                      <Card user={user} key={user._id} index={i} last={false} />
                    );
                  })}
                </div>
              )}
            </div>
            {users.length > 0 && (
              <div className='users__wrapper'>
                {users.map((user, i) => {
                  return i === users.length - 1 ? (
                    <Card user={user} key={user._id} index={i} last={true} contact={true} />
                  ) : (
                    <Card user={user} key={user._id} index={i} last={false} contact={true} />
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
