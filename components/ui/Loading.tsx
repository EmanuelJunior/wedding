"use client"

import { MusicContext } from "@/contexts/music";
import { togglePlay } from "@/utils";
import { Pause, Play, SkipBack, SkipForward, Volume1 } from "lucide-react";
import { useContext, useEffect } from "react";

export const Loading = () => {

  const { togglePlaySong, music: { ref, isPlay } } = useContext( MusicContext );

  useEffect(() => {
    togglePlay(ref, isPlay, togglePlaySong);
  }, [])

  return (
    <main className="fixed top-0 bg-gradient-to-r from-gray-900 to-gray-950 z-50 w-full min-h-screen flex justify-center items-center">
      <div className='bg-gray-950 dark:bg-gray-900 p-5 shadow-2xl shadow-red-800 rounded-xl border-4 border-red-500 border animate-pulse'>

        <h1 className='text-3xl text-red-500 dark:text-red-500'>Emanuel & Vanessa</h1>
        <p className='text-lg font-extralight text-gray-200 dark:text-gray-200 mb-4'>Nuestra boda</p>

        <div className='flex gap-1 justify-center items-center text-red-500 dark:text-red-500 '>
          <SkipBack className="w-8 h-8"/>

          <button
            onClick={() => togglePlay( ref, isPlay, togglePlaySong )}
          >
            {
              isPlay 
                ? <Pause className="w-8 h-8"/> 
                : <Play className="w-8 h-8"/>
            }
          </button>
          <SkipForward className="w-8 h-8"/>
          <Volume1 
            // onClick={() => { if (audioRef.current) audioRef.current.volume = 1; }}
            className='ml-4 w-8 h-8'
          />
        </div>
      </div>

    </main>
  )
}
