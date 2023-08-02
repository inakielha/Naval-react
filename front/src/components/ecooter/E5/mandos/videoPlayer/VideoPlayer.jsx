
import React, { useRef, useEffect } from 'react';
import video from "../../../../../assets/ecooter/video.mp4";


const VideoPlayer = () => {
  const videoRef = useRef(null);

  // Configuramos el Intersection Observer
  useEffect(() => {
    const options = {
      root: null, // Observar en el viewport
      rootMargin: '0px',
      threshold: 0.5, // Porcentaje del elemento visible para considerarlo en la vista
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // El video está en la vista, reproducirlo
          videoRef.current.play();
        } else {
          // El video ya no está en la vista, pausarlo
          videoRef.current.pause();
        }
      });
    }, options);

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    // Limpieza del observer cuando el componente se desmonte
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
