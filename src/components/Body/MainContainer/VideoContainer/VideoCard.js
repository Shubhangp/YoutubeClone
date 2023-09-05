import React, { useEffect, useState } from "react";

const formatViewCount = (viewCount) => {
    const view = parseFloat(viewCount);

    if (view >= 1e9) {
        return (view / 1e9).toFixed(1) + "B";
    } else if (view >= 1e6) {
        return (view / 1e6).toFixed(1) + "M";
    } else if (view >= 1e3) {
        return (view / 1e3).toFixed(1) + "K";
    } else {
        return view.toString();
    }
};

const VideoCard = ({video}) => {
    const [timeSince, setTimeSince] = useState({years: 0, months: 0, days: 0,});

    const {snippet, statistics} = video;
    const { title, thumbnails, channelTitle, publishedAt } = snippet;
    const {viewCount} = statistics;

    const formattedViewCount = formatViewCount(viewCount);

    useEffect(() => {
      const now = new Date();
      const publishedOn = new Date(publishedAt);
      const timeDifference = now - publishedOn;

      const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
      const months = Math.floor(
        (timeDifference % (365 * 24 * 60 * 60 * 1000)) /
          (30 * 24 * 60 * 60 * 1000)
      );
      const days = Math.floor(
        (timeDifference % (30 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
      );

      setTimeSince({ years, months, days });
    }, [publishedAt]);

    return (
      <div className="relative w-[calc(100%/3-16px-0.01px);] ml-[calc(16px/2)] mr-[calc(16px/2)] mb-10">
        <div className="h-full flex justify-center">
          <div className="w-full">
            <div className="w-full h-full inline-block">
              <div className="w-full h-full flex items-center flex-row flex-wrap">
                <div className="w-full inline-block cursor-pointer">
                  <div className="relative block w-full before:block before:w-full before:rounded-xl before:pb-[56.25%] before:bg-black/[0.1]">
                    <a
                      href="/"
                      className="absolute top-0 bottom-0 left-0 right-0 h-full block ml-auto mr-auto overflow-hidden rounded-xl"
                    >
                      <img
                        className="w-full h-full object-cover inh"
                        alt=""
                        src={thumbnails?.high?.url}
                      />
                    </a>
                  </div>
                </div>
                <div className="relative cursor-pointer m-0 flex">
                  <a href="/" className="h-9 mt-3 mr-3 cursor-pointer">
                    <div className="w-9 h-9 rounded-[50%] overflow-hidden bg-black/[0.1]">
                      <img
                        className="block max-w-full max-h-none mx-auto"
                        alt=""
                        src="https://yt3.ggpht.com/ytc/AOPolaR55MXiQz2QHktWGaJ15h3xl3O-NOUYpS18q2E9ew=s68-c-k-c0x00ffffff-no-rj"
                      />
                    </div>
                  </a>
                  <div className="overflow-x-hidden pr-6">
                    <h3 className="text-[#0f0f0f] mx-0 mt-3 mb-1">
                      <a href="/" className="cursor-pointer">
                        <p className="font-medium text-[#0f0f0f] text-[1rem] line-clamp-2">
                          {title}
                        </p>
                      </a>
                    </h3>
                    <div className="flex flex-col flex-wrap">
                      <div className="flex flex-wrap items-center max-w-full font-normal text-[0.9rem] text-[#606060] hover:text-[#0f0f0f]">
                        <a href="/" className="">
                          {channelTitle}
                        </a>
                        <div className="flex items-center mr-2">
                          <div className="bg-none mb-[1px] p-0 pl-1 rounded-sm">
                            <svg
                              height="14"
                              viewBox="0 0 24 24"
                              width="14"
                              focusable="false"
                            >
                              <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM9.8 17.3l-4.2-4.1L7 11.8l2.8 2.7L17 7.4l1.4 1.4-8.6 8.5z"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap max-h-16 max-w-full text-[0.9rem] text-[#606060] font-normal overflow-hidden">
                        <span>{formattedViewCount} views</span>
                        <span className="mx-1">.</span>
                        <span>{timeSince.days} days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default VideoCard;