import { CircleStatus, ListItem } from './FriendList.styles';
export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem>
    <CircleStatus isOnline={isOnline}></CircleStatus>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </ListItem>
);
