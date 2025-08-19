"use client"

import { MusicContext } from '@/contexts/music';
import { togglePlay } from '@/utils';
import { Button } from '@nextui-org/react';
import { Music, Pause, Play, SkipBack, SkipForward, Volume1, X } from 'lucide-react';
import React, { useContext, useState } from 'react'

export const WeddingMusic = () => {

  const { music: { isPlay, ref }, togglePlaySong } = useContext( MusicContext );
  const [showMusic, setShowMusic] = useState(false);

  return (
    <>

      {/* Botón personalizado */}
      <Button 
        size='lg' 
        className={`${showMusic ? 'hidden' : 'fixed'} -right-3 -bottom-3 dark:bg-gray-900 border-4 border-red-700 dark:border-red-500 bg-red-50 hover:scale-110 hover:transition-all shadow-2xl`}
        radius='full' 
        startContent={<Music className='text-red-700 dark:text-red-500'/>} isIconOnly
        onClick={() => setShowMusic(true)}
      />

      {
        showMusic && (
          <div className='bg-red-50 dark:bg-gray-900 p-5 shadow-2xl fixed right-2 bottom-2 rounded-lg'>

            <div className='flex justify-between'>
              <h1 className='text-xl text-red-900 dark:text-red-500'>La boda</h1>
              <button onClick={() => setShowMusic(false)} className='hover:scale-150 hover:transition-all'>
                <X className='w-3 h-3 text-red-700 dark:text-red-500'/>
              </button>
            </div>


            <p className='text-xs text-gray-500 dark:text-gray-200 mb-4'>Camilo Correa</p>

            <div className='flex gap-1 justify-center items-center text-red-900 dark:text-red-500'>
              <SkipBack/>

              <button
                onClick={ () => togglePlay(ref, isPlay, togglePlaySong) }
              >
                {
                  isPlay ? <Pause/> : <Play/>
                }
              </button>
              <SkipForward/>
              <Volume1 
                onClick={() => { if (ref.current) ref.current.volume = 1; }}
                className='ml-4'
              />
            </div>
          </div>
        )
      }

    </>
  )
}
