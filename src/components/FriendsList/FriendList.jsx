import React from 'react';
import './friends.css';

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    {friends.map(friend => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </ul>
);

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className="friend-list-item">
    <span className={`status-indicator ${isOnline ? 'online' : 'offline'}`} />
    <img className="avatar" src={avatar} alt={`${name}'s avatar`} />
    <p className="name">{name}</p>
  </li>
);

export { FriendList };
export default FriendListItem;
