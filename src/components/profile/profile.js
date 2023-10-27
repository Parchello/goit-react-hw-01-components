import {
  Avatar,
  Label,
  List,
  ListItem,
  ProfileCard,
  Quantity,
} from './profile.styles';

export const Profile = ({ items }) => {
  return (
    <ProfileCard>
      <div>
        <Avatar src={items.avatar} alt={items.username} />
        <p>{items.username}</p>
        <p>@{items.tag}</p>
        <p>{items.location}</p>
      </div>

      <List>
        <ListItem>
          <Label>Followers</Label>
          <Quantity>{items.stats.followers}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Views</Label>
          <Quantity>{items.stats.views}</Quantity>
        </ListItem>
        <ListItem>
          <Label>Likes</Label>
          <Quantity c>{items.stats.likes}</Quantity>
        </ListItem>
      </List>
    </ProfileCard>
  );
};
