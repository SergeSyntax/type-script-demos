import { useState, useRef, useEffect } from 'react';

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
  const inputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState('');
  const [user, setUser] = useState<User | undefined>();

  useEffect(() => {
    inputRef.current?.focus();
    return () => {};
  }, []);

  const onClick = () => {
    const foundUser = users.find(user => user.name === name);

    setUser(foundUser);
  };

  return (
    <div className="">
      <input ref={inputRef} type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={onClick}>Find User</button>
      <div>{user?.name}</div>
    </div>
  );
};

export default UserSearch;
