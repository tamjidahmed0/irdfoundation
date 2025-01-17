'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Repeat, Play, Pause } from 'lucide-react';





const CustomAudioPlayer = ({ audioLink }) => {
  const audioRef = useRef(null);
  const progressContainerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [progress, setProgress] = useState(0);
  const [remainingTime, setRemainingTime] = useState(null);

  // Play/pause toggle
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Toggle loop
  const toggleLoop = () => setIsLooping(!isLooping);

  // Handle time updates
  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;

    setRemainingTime(duration - currentTime);
    setProgress((currentTime / duration) * 100);
  };

  // Handle audio end
  const handleAudioEnd = () => {
    setIsPlaying(false); // Stop playing
    setProgress(0); // Reset progress
    setRemainingTime(null); // Reset remaining time
  };

  // Seek to specific time
  const seekTo = (positionPercentage) => {
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (positionPercentage / 100) * duration;
  };

  // Handle clicking on progress bar
  const handleProgressClick = (e) => {
    const rect = progressContainerRef.current.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left; // Position relative to the progress bar
    const percentage = (clickPosition / rect.width) * 100;
    seekTo(percentage);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = isLooping;
      audioRef.current.addEventListener('timeupdate', handleTimeUpdate);
      audioRef.current.addEventListener('ended', handleAudioEnd);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', handleTimeUpdate);
          audioRef.current.removeEventListener('ended', handleAudioEnd);
        }
      };
    }
  }, [isLooping]);

  // Format time for display
  const formatTime = (time) => {
    if (!time || time < 0) return '00:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };





  return (
    <div className="flex gap-6 items-center">
      <audio ref={audioRef} src={audioLink} preload="auto" />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayPause}
        className="w-12 h-12 bg-[#1FA45B] text-white rounded-full flex items-center justify-center text-xl shadow-md focus:outline-none"
      >
        {isPlaying ? <Pause  size={25} /> : <Play  size={25}/>}
      </button>

      {/* Progress Bar & Repeat Button - Visible only when playing */}
      {isPlaying && (
        <div className="flex items-center w-full max-w-md space-x-4">
          <div
            className=" w-28 relative  h-2 bg-gray-300 rounded-full cursor-pointer"
            ref={progressContainerRef}
            onClick={handleProgressClick}
          >
            <div
              className="absolute top-0 left-0 h-full bg-[#1FA45B] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
            <div
              className="absolute top-1/2 -translate-y-1/2 transform w-4 h-4 bg-[#1FA45B] rounded-full cursor-pointer"
              style={{ left: `calc(${progress}% - 0.5rem)` }}
            ></div>
          </div>

          <div className="text-sm text-gray-600">{formatTime(remainingTime)}</div>

          <button
            onClick={toggleLoop}
            className={`text-xl ${isLooping ? 'text-[#1FA45B]' : 'text-gray-500'} focus:outline-none`}
          >
            <Repeat  size={25} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomAudioPlayer;
