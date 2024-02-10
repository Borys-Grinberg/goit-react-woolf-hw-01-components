import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FriendListWrapper = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
list-style: none;
  padding: 0;

`;

const FriendListItemWrapper = styled.li`
  display: flex;
  width: 600px;
  background-color: #ddd;
  border-radius: 8px;
  flex-direction: row;
  
  align-items: center;
  margin-bottom: 20px;
`;

const StatusIndicator = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isOnline ? 'green' : 'red')};
  margin-right: 10px;
`;

const Avatar = styled.img`
  border-radius: 20%;
  width: 48px;
  height: 48px;
  margin-right: 10px;
  background-color: white;
`;

const FriendList = ({ friends }) => (
  <FriendListWrapper className="friend-list">
    {friends.map((friend) => (
      <FriendListItem key={friend.id} {...friend} />
    ))}
  </FriendListWrapper>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendListItemWrapper className="item">
    <StatusIndicator isOnline={isOnline} />
    <Avatar src={avatar} alt={`${name}'s avatar`} />
    <p className="name">{name}</p>
  </FriendListItemWrapper>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export { FriendList, FriendListItem };