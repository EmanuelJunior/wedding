import { MusicState } from './';

type MusicActionType = 
  | { type: '[Music] - Toggle Play Music' }

export const musicReducer = ( state: MusicState, action: MusicActionType ): MusicState => {

  switch( action.type ) {
    case '[Music] - Toggle Play Music': 
      return {
        ...state,
        music: {
          ...state.music,
          isPlay: !state.music.isPlay,
        }
      };
    default: 
      return state;
  }
}