"use client"

import { MusicContext } from "@/contexts/music";
import { togglePlay } from "@/utils";
import { Gem, Pause, Play, SkipBack, SkipForward, Volume1 } from "lucide-react";
import { useContext, useEffect, useLayoutEffect } from "react";

export const Loading = () => {

  const { togglePlaySong, music: { ref, isPlay } } = useContext( MusicContext );

  useLayoutEffect(() => {
    togglePlay(ref, isPlay, togglePlaySong);
  }, [])

  return (
    <main
      className="
        fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-950 bg-white
      "
    >
      <div className="p-4 animate-spin drop-shadow-2xl bg-gradient-to-bl from-red-400 via-red-400 to-red-600 md:w-36 md:h-36 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full dark:bg-gray-950 bg-white background-blur-md">
        </div>
      </div>

      <Gem className="w-14 h-14 text-red-500 absolute"/>
    </main>
  )
}