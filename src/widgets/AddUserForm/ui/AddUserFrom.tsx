'use client'


import Button from '@/shared/ui/Button'


import React, { useState } from 'react'

import { FormValues } from '../types'

import Link from 'next/link'

const AddUserFrom = () => {
    const [values, setValues] = useState<FormValues>({
        name: '',
        email: ''
    })

    const handleSubmit = () => {
        setValues({name:'', email: ''})
        console.log(values)

    }

  return (
    <div>
        <label className='m-1'>
            Name
            <input 
                type='text'
                className='input my-3 input-bordered input-primary w-full' 
                placeholder='Add name'
                value={values.name}
                onChange={(e: any) => setValues({...values, name: e.target.value})}
            />
        </label>

        <label className='m-1'>
            Email
            <input 
                type='email'
                className='input my-3 input-bordered input-primary w-full' 
                placeholder='Add email'
                value={values.email}
                onChange={(e: any) => setValues({...values, email: e.target.value})}
            />
        </label>
        <Link href={'/'}>
        
            <Button onClick={handleSubmit} className='flex my-5 w-auto btn btn-primary'>
                <>
                    Submit
                </>
            </Button>
            
        </Link>
    </div>
  )
}

export default AddUserFrom