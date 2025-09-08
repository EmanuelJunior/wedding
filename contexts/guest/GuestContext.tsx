"use client"

import { createContext } from 'react';
import { Guest } from '.';

interface ContextProps {
  auth: Guest | null;
  
  // Methods
  authGuest: (guest: Guest) => void;
}

export const GuestContext = createContext( {} as ContextProps );