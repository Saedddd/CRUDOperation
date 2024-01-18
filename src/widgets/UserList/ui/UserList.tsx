'use client'

import React from 'react'
import Link from 'next/link'

import UserItem from '@/entities/UserItem';
import { IUser} from '../types';
import Button from '@/shared/ui/Button';
import { useSelector } from 'react-redux';

const UserList: React.FC = () => {
    const user = useSelector<any>(store => store.users)
    

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
        <div className="">
            <Button className='flex m-5 w-auto btn btn-primary ' type='button'>
              <>  
                <Link href={'/addUser'}>
                  <h1 className='items-center'>Add user</h1>
                </Link>
              </>
            </Button>

            <div className='grid gap-5 md:grid-cols-2'> 
                {user.length ? renderCard() : <p className='text-center col-span-2 text-white font-bold'>No User</p>}
            </div>
        </div>
  )
}

export default UserList;
