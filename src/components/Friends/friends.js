import { CircleStatus, List, ListItem } from './friends.styles';

export const Friends = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <ListItem>
          <CircleStatus isOnline={friend.isOnline}></CircleStatus>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
        </ListItem>
      ))}
    </List>
  );
};
