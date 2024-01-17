import React from 'react'

import { IUser } from '../types'

import { FiEdit } from "react-icons/fi";
import { FiTrash2 } from "react-icons/fi";
import Link from 'next/link';


const UserItem = ({id, name, email} : IUser) => {
  return (
    <div className='m-5' >
        <div className="bg-white p-4 rounded-md shadow-md">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold">{name}</h2>
                    <p className="text-gray-500">{email}</p>
                    <p className="text-gray-700">ID: {id}</p>
                </div>

                <div className=" flex cursor-pointer  gap-2 ">
                    <Link href={`edit-user/${id}`}>
                        <FiEdit size={25} />
                    </Link>

                    <FiTrash2 size={25}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserItem