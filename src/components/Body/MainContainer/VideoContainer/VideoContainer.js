import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from "../../../../utils/contants";
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos, setVideos] = useState([]);
  console.log(videos);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async() => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideos(json?.items);
  }

  return (
    <div className='w-full pt-6 flex flex-wrap justify-start'>
      <div className='w-full flex justify-center'>
        <div className='w-full max-w-[calc(calc(3*(500px+16px)-16px)+16px)] flex flex-wrap my-0 mx-4'>         
          {
            videos.map((video) => 
            <VideoCard video={video} key={video.id} />
            )
          }
        </div>
      </div>
    </div>
  )
}

export default VideoContainer