import { useRef, useState, useEffect, MouseEvent } from 'react';
import './App.css';

const SatelliteViewer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [mouseX, setMouseX] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0); // To store video duration after it's loaded

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseXRelative = e.clientX - rect.left;
    setMouseX(mouseXRelative);
  };

  useEffect(() => {
    const video = videoRef.current;

    if (video) {
      // Event listener for when the video metadata is loaded (duration available)
      const handleMetadataLoaded = () => {
        setVideoDuration(video.duration); // Set the video duration after it's loaded
      };

      video.addEventListener('loadedmetadata', handleMetadataLoaded);

      return () => {
        // Clean up the event listener when the component is unmounted
        video.removeEventListener('loadedmetadata', handleMetadataLoaded);
      };
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (video && videoDuration > 0) {
      const containerWidth = video.parentElement?.clientWidth || 1;
      const percentage = mouseX / containerWidth;
      video.currentTime = videoDuration * percentage; // Set video time based on mouse position
    }
  }, [mouseX, videoDuration]); // Update when mouseX or videoDuration changes

  return (
    <>
        <div className="satellite-container" onMouseMove={handleMouseMove}>
        <video
            ref={videoRef}
            src="../components/output.mp4" // Replace with your actual video path
            muted
            width={800}
        />
        </div>
    </>
  );    
};

export default SatelliteViewer;
