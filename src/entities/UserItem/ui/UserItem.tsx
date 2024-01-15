import React from 'react'

import { IUser } from '../types'


const UserItem = ({id, name, email} : IUser) => {
  return (
    <div className='m-5 '>
        <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-gray-500">{email}</p>
                    <p className="text-gray-700">ID: {id}</p>
                </div>

                <div className="mt-4">
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserItem