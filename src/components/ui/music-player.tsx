"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Vietnamese patriotic music - you can replace with actual audio file
  const musicSrc = "/music/vietnamese-anthem.mp3"; // You'll need to add this file

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white/90 backdrop-blur-md border border-red-900/20 rounded-none p-3 shadow-lg">
      <audio
        ref={audioRef}
        src={musicSrc}
        loop
        onEnded={() => setIsPlaying(false)}
        onError={() => console.log('Audio file not found')}
      />
      
      <div className="flex items-center space-x-3">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="flex items-center justify-center w-8 h-8 bg-red-900 text-white rounded-full hover:bg-red-800 transition-colors"
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <Pause size={16} /> : <Play size={16} />}
        </button>

        {/* Volume Control */}
        <div className="flex items-center space-x-2">
          <button
            onClick={toggleMute}
            className="text-red-900 hover:text-red-800 transition-colors"
            aria-label={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
          
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 h-1 bg-red-900/20 rounded-lg appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #dc2626 0%, #dc2626 ${volume * 100}%, #fecaca ${volume * 100}%, #fecaca 100%)`
            }}
          />
        </div>

        {/* Music Info */}
        <div className="text-xs text-red-900 font-sub uppercase tracking-wider">
          <div className="text-[10px]">Quốc Ca</div>
          <div className="text-[8px] opacity-70">Việt Nam</div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
