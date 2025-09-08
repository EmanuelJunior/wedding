"use client"

import { FC, ReactNode, useReducer } from 'react';
import { GuestContext, guestReducer } from './';
import { Database } from '@/interfaces/database.types';

export type Guest = Database["public"]["Tables"]["guests"]["Row"] | null

export interface  GuestState {
  auth: Guest | null;
}

const GUEST_INITIAL_STATE:   GuestState = {
  auth: null,
}

type Props = {
  children: ReactNode,
  initialGuest?: Guest
}

export const  GuestProvider:FC<Props> = ({ children, initialGuest }) => {

  const [ state, dispatch ] = useReducer( guestReducer, GUEST_INITIAL_STATE );

  const authGuest = ( guest: Guest ) => {
    dispatch({ type: '[Guest] - Fetch Auth Guest', payload: guest })
  }

  return (
    < GuestContext.Provider value={{ 
      ...state,
      auth: initialGuest ? initialGuest : state.auth,

      // Methods
      authGuest,
    }}>
      { children }
    </  GuestContext.Provider>
  )
};