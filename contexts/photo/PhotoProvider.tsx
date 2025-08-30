import { FC, ReactNode, useReducer, useRef } from 'react';
import { Photo, PhotoContext, photoReducer } from './';

export interface PhotoState {
  photos: Photo[]
}

const PHOTO_INITIAL_STATE: PhotoState = {
  photos: []
}

type Props = {
  children: ReactNode
}

export const PhotoProvider:FC<Props> = ({ children }) => {

  const [ state, dispatch ] = useReducer( photoReducer, PHOTO_INITIAL_STATE );

  const addPhoto = ( photo: Photo ) => {
    dispatch({ type: '[Photo] - Add Photo', payload: photo })
  }

  return (
    <PhotoContext.Provider value={{ 
      photos: state.photos,

      // Methods
      addPhoto
    }}>      
      { children }
    </PhotoContext.Provider>
  )
};