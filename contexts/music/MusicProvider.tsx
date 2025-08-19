import { FC, ReactNode, useReducer, useRef } from 'react';
import { MusicContext, musicReducer } from './';
import { AutoSong } from '@/components/ui/AutoSong';

export interface MusicState {
  music: {
    song: string;
    path: string;
    ref?: React.MutableRefObject<HTMLAudioElement | null>;
    isPlay: boolean;
  }
}

const MUSIC_INITIAL_STATE: MusicState = {
  music: {
    isPlay: false,
    path: '/boda-camilo.m4a',
    song: 'Boda Camilo',
  }
}

type Props = {
  children: ReactNode
}

export const MusicProvider:FC<Props> = ({ children }) => {

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [ state, dispatch ] = useReducer( musicReducer, MUSIC_INITIAL_STATE );

  const togglePlaySong = () => {
    dispatch({ type: '[Music] - Toggle Play Music' })
  }

  return (
    <MusicContext.Provider value={{ 
      music: {
        ...state.music,
        ref: audioRef,
      },

      // Methods
      togglePlaySong
    }}>      
      <AutoSong/>
      { children }
    </MusicContext.Provider>
  )
};