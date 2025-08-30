import { Photo, PhotoState } from '.';

type PhotoActionType = 
  | { type: '[Photo] - Add Photo', payload: Photo }

export const photoReducer = ( state: PhotoState, action: PhotoActionType ): PhotoState => {

  switch( action.type ) {
    case '[Photo] - Add Photo': 
      return {
        ...state,
        photos: [
          ...state.photos,
          action.payload
        ]
      };
    default: 
      return state;
  }
}