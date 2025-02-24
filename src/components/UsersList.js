// src/features/users/UsersList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../slices/usersSlice';

const UsersList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h2>사용자 목록</h2>
      <ul>
           {users.map((user) => (
                  <li key={user.id}>
                        {user.name} - {user.email}
                   </li>
          ))}
      </ul>
 </div>
);
};
export default UsersList;
