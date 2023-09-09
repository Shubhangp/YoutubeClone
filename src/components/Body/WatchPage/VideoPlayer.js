import React from 'react';

const VideoPlayer = ({videoId}) => {
  return (
    <div className='mt-10 ml-3'>
      <iframe
        width="700"
        height="400"
        src={"https://www.youtube.com/embed/"+ videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoPlayer;
