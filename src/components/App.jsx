import React from 'react';

import Profile from 'components/Profile';
import Statistics from 'components/Statistics';
/*import FriendList from 'components/FriendList';
import Transactions from 'components/TransactionHistory';
*/
import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';
import transactions from 'components/transactions.json';
 export const App = () => {
  return (
    <div>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    </div> );
};
