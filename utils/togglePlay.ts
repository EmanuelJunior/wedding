
export const togglePlay = (
  ref: React.MutableRefObject<HTMLAudioElement | null>, 
  isPlay: boolean, 
  togglePlaySong: () => void

) => {
  if (!ref.current) {
    console.log("No existe todavia ref")
    return;
  }

  ref.current.volume = .5;
  togglePlaySong();
  
  if (isPlay) {
    ref.current.pause();
    console.log("Se pauso")
  } else {
    ref.current.play();
    console.log("Se dio play")
  }

};