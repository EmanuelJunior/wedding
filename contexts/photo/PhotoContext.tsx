
import { createContext } from 'react';

type Category = 'Amigos' | 'Familia' | 'Ceremonia' | 'Recepcion' | 'Preparativos'

export interface Photo {
  id: string;
  image: string;
  category: Category;
  description: string;
  createBy: string;
  updatedBy: string;
};

interface ContextProps {
  photos: Photo[],

  // Methods
  addPhoto: (photo: Photo) => void;
}

export const PhotoContext = createContext( {} as ContextProps );