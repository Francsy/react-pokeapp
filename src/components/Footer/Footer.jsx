import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';

import pokemonTheme from '../../assets/audio/poke-lofi.mp3'


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
                        <img src="/assets/stop.webp" alt="" />

            </Button>
          ) : (
            <Button variant="secondary" size='lg' className="left-button" onClick={() => playSong()}>
                        <img src="/assets/poke-flute.webp" alt="" />

            </Button>
          )}
          <Button variant="secondary" size='lg' className="right-button" onClick={() => resetSong()}>
          <img src="/assets/reset.webp" alt="" />
          </Button>
        </>
      ) :
      <Button variant="secondary" size='lg' onClick={() => handleMusic()}>
          <img src="/assets/poke-flute.webp" alt="" />
        </Button>
    }
    <h4><a href="https://github.com/Francsy" rel="noreferrer" target="_blank" ><img src='/assets/github.webp' alt="Git-hub"/>&nbsp;Created by Francsy</a></h4>
    <img className="footer-img" src="/assets/footer-pokemon.webp" alt="" />
  </footer>
};

export default Footer;
