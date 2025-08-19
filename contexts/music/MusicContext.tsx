
import { createContext } from 'react';

interface ContextProps {
  music: {
    song: string;
    path: string;
    ref: React.MutableRefObject<HTMLAudioElement | null>;
    isPlay: boolean;
  };

  // Methods
  togglePlaySong: () => void;
}

export const MusicContext = createContext( {} as ContextProps );