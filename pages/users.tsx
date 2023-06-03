import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div >
      <h1 className='text-2xl mt-2 text-center font-bold mb-4'>Users</h1>
      <table className="table-fill">
        <thead>
          <tr>
            <th className="text-left">Name</th>
            <th className="text-left">Email</th>
          </tr>
        </thead>
        <tbody className="table-hover">
          {users.map((user: any) => (
            <tr key={user.id}>
              <td className="text-left">{user.name}</td>
              <td className="text-left">{user.email}</td>
            </tr>
          ))}


        </tbody>
      </table>

    </div>
  );
};

export default UsersPage;
