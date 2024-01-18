import React from 'react'

import { configureStore } from '@reduxjs/toolkit'
import { usersReduser } from '@/features/UserSlise/UserSlise';

export const store = configureStore({
    reducer: {
        users: usersReduser 
    },
});
  