import React from 'react';
import '../App.css'; 

export default function Users() {
  const usersData = [
    { id: 1, name: 'User 1', role: 'Admin' },
    { id: 2, name: 'User 2', role: 'Editor' },
    { id: 3, name: 'User 3', role: 'Viewer' },
    // Add more users as needed
  ];

  return (
    <div>
      <h1 className='title'>Users</h1>
      <table className='user-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
