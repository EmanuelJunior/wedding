"use client"

import { MusicContext } from "@/contexts/music";
import { useContext } from "react";

export const AutoSong = () => {

  const {
    music: {
      ref,
      path
    },
  } = useContext( MusicContext );

  console.log("Cliente se intenta ejecutar")

  return (
    <audio ref={ref} loop>
      <source src={path} type="audio/mpeg" />
      Tu navegador no soporta audio HTML5.
    </audio>
  )
}
