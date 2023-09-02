import React from 'react'
import Button from './Button/Button';

const ButtonList = () => {

  const btnList = ["All", "Mixes", "Music", "Web Development", "Live", "Gaming", "Mantras", "Cooking", "Recently uploaded", "New to you"]

  return (
    <div className='w-[calc(100%-48px)] max-w-[calc(3*500px+16px-16px)]'>
      <div className='w-full h-14 flex'>
        <div className='fixed top-14 w-[1062px] bg-white flex justify-start grow-0 shrink-0 basis-auto z-[2000]'>
          <div className='relative whitespace-nowrap overflow-hidden touch-pan-y '>
            {btnList.map((btn, index) =>
              <Button key={index} btn={btn} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonList;
