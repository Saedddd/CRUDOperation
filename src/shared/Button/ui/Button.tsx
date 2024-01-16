import React from 'react'

import { IButton } from '../types'

function Button({type, onClick, className, children} : IButton) {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={className}
      >
        {children}
      </button>
    </>
  )
}

export default Button