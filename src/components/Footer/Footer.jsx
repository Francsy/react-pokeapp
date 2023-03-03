import React, { useState, useEffect } from "react";
import pokemonTheme from '../../styles/assets/poke-lofi.mp3'
import Button from 'react-bootstrap/Button';



const Footer = () => {
  const [isOn, setIsOn] = useState(false)
  const [song, setSong] = useState(null);
  const [wantMusic, setWantMusic] = useState(false)

  useEffect(() => {
    setSong(new Audio(pokemonTheme));
  }, []);

  useEffect(() => {
    if (song) {
      song.addEventListener('ended', () => {
        setWantMusic(false);
      });
    }
    return () => { // This return cleans previous effects
      if (song) {
        song.removeEventListener('ended', () => {
          setWantMusic(false);
        });
      }
    };
  }, [song]);

  const playSong = () => {
    if (song) {
      song.play();
      setIsOn(true);
    }
  };

  const stopSong = () => {
    if (song) {
      song.pause();
      setIsOn(false);
    }
  };

  const resetSong = () => {
    if (song) {
      song.pause();
      song.currentTime = 0;
      song.play();
      setIsOn(true);
    }
  };

  const handleMusic = () => {
    song.play();
    setIsOn(true)
    setWantMusic(true)
  }


  return <footer>

    {
      wantMusic ? (
        <>
          {isOn ? (
            <Button variant="secondary" size='lg'  className="left-button" onClick={() => stopSong()}>
                        <img src="/assets/stop.png" alt="" />

            </Button>
          ) : (
            <Button variant="secondary" size='lg' className="left-button" onClick={() => playSong()}>
                        <img src="/assets/poke-flute.png" alt="" />

            </Button>
          )}
          <Button variant="secondary" size='lg' className="right-button" onClick={() => resetSong()}>
          <img src="/assets/reset.png" alt="" />
          </Button>
        </>
      ) :
      <Button variant="secondary" size='lg' onClick={() => handleMusic()}>
          <img src="/assets/poke-flute.png" alt="" />
        </Button>
    }
    <h4><a href="https://github.com/Francsy"><img src='/assets/github.png' alt="Git-hub"/>&nbsp;Created by Francsy</a></h4>
    <img className="footer-img" src="/assets/footer-pokemon.png" alt="" />
  </footer>
};

export default Footer;
