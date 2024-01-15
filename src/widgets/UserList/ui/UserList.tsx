import UserItem from '@/entities/UserItem';
import React from 'react'

import { IUser} from '../types';

const UserList: React.FC = () => {
    const user = [
        { id: '1', name: 'Saed', email:'saed@gmail.com'},
        { id: '2', name: 'Saed', email:'saed@gmail.com'}
    ];

    const renderCard =  () => {
       return user.map((item : IUser) => 
       <UserItem 
            key={item.id}
            id={item.id}
            name={item.name}
            email={item.email}
        />
       )
    }

  return (
    <div className='grid gap-5 md:grid-cols-2'> 
        {user.length ? renderCard() : <p className='text-center col-span-2 text-white font-bold'>No User</p>}
    </div>
  )
}

export default UserList;
