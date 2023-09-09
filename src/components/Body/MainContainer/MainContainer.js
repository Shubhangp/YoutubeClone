import React from 'react';
import VideoContainer from './VideoContainer/VideoContainer';
import ButtonList from './ButtonList/ButtonList';

const MainContainer = () => {
  return (
    <div className='ml-60 mt-14 overflow-y-visible overflow-x-hidden'>
      <div className='flex flex-col items-center'>
        <ButtonList />
        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer
