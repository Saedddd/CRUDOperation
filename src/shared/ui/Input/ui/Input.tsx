"use client"

import React from 'react'

import { IInput } from '../types'

const Input = ({type, className, placeholder, onChange, value} : IInput) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(e.target.value);
        }
      };

  return (
    <>
        <input 
            type={type}
            className={className}
            placeholder={placeholder}
            onChange={handleChange}
            value={value}
        />
    </>
  )
}

export default Input