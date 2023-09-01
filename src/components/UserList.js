import classes from './UsersList.module.css';

const UserList = (props) => {
  return (
    <div className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.username}>
            {user.username} ({user.years} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
