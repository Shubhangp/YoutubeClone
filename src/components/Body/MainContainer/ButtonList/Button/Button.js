import React from 'react'

const Button = ({btn}) => {
  return (
    <div className='relative h-8 min-w-[12px] rounded-lg box-border outline-none cursor-pointer select-none font-roboto font-normal text-[#0f0f0f] text-[1rem] leading-8 py-0 px-3 m-3 ml-0 bg-black/[0.05] inline-flex items-center'>
      <div className='max-w-[20rem] text-ellipsis overflow-hidden whitespace-nowrap block'>{btn}</div>
    </div>
  )
}

export default Button
