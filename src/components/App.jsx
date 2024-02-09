import React from 'react';
import Profile from 'components/Profile';
import user from 'components/user.json';
 export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    
  );
};