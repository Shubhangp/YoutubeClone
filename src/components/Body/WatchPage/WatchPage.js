import React, { useEffect } from 'react';
import VideoPlayer from './VideoPlayer';
import { useDispatch } from 'react-redux';
import { closeMenu } from "../../../utils/appSlice";
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const [searchParam] = useSearchParams();
    console.log(searchParam.get("v"));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( closeMenu())
    }, []);

  return (
    <div>
      WatchPage
      <VideoPlayer videoId= {searchParam.get("v")} />
    </div>
  );
}

export default WatchPage;
