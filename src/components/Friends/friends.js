export const Friends = ({ friends }) => {
  return (
    <ul class="stat-list">
      {friends.map(friend => (
        <li class="item" key={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};
