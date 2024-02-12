import React from 'react';
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <li key={friend.id} className="item1">
        <span className={`status ${friend.isOnline ? 'online' : 'offline'}`} />
        <img
          className="avatar2"
          src={friend.avatar}
          alt={`${friend.name}'s avatar`}
        />
        <p className="name">{friend.name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;
