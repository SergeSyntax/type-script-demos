import { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: 'Sarah', age: 20 },
  { name: 'Alex', age: 20 },
  { name: 'Michael', age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);

    setUser(foundUser);
  };

  return (
    <div className="">
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
    </div>
  );
};

export default UserSearch;
