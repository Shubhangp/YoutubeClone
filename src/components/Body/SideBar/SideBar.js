import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='fixed right-auto left-0 -top-[120px] -bottom-[120px] min-w-[240px] max-w-[256px] touch-pan-y z-[2005] '>
      <div className='w-full absolute top-0 bottom-0 left-0 py-[120px] px-0 bg-[#FFF] transform translate-x-0 translate-y-0 translate-z-0'>
        <div className='h-full flex flex-col'>
          <div className='mt-14'></div>
          <div className='flex flex-col grow shrink basis-[1e-9px]'>
            <div className='flex-col grow shrink basis-[1e-9px] overflow-hidden overflow-y-auto'>
              <div className='w-60 block'>
                <div className='relative'>
                  <div className='block min-h-[40px] border-b border-black/[0.1] p-3'>
                    <div>
                      <div className='relative block w-[calc(100%-12px)] bg-black/[0.05] rounded-[10px] '>
                        <Link to="/" className='w-full min-h-[40px] cursor-pointer box-border outline-0 text-[#0f0f0f] flex items-center hover:bg-black/[0.05] hover:rounded-[10px]'>
                          <div className='px-3 flex items-center text-base font-normal'>
                            <div className='mr-6'>
                              <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                <g>
                                  <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
                                </g>
                              </svg>
                            </div>
                            <div className='grow shrink basis-[1e-9px] whitespace-nowrap text-ellipsis text-[#0f0f0f] font-roboto font-medium'>Home</div>
                          </div>
                        </Link>
                      </div>
                      <div className='relative block w-[calc(100%-12px)] rounded-[10px] '>
                        <a href="/" className='w-full min-h-[40px] cursor-pointer box-border outline-0 text-[#0f0f0f] flex items-center hover:bg-black/[0.05] hover:rounded-[10px]'>
                          <div className='px-3 flex items-center text-base font-normal'>
                            <div className='mr-6'>
                              <svg height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                              </svg>
                            </div>
                            <div className='grow shrink basis-[1e-9px] whitespace-nowrap text-ellipsis text-[#0f0f0f] font-roboto'>Shorts</div>
                          </div>
                        </a>
                      </div>
                      <div className='relative block w-[calc(100%-12px)] rounded-[10px] '>
                        <a href="/" className='w-full min-h-[40px] cursor-pointer box-border outline-0 text-[#0f0f0f] flex items-center hover:bg-black/[0.05] hover:rounded-[10px]'>
                          <div className='px-3 flex items-center text-base font-normal'>
                            <div className='mr-6'>
                              <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false">
                                <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
                              </svg>
                            </div>
                            <div className='grow shrink basis-[1e-9px] whitespace-nowrap text-ellipsis text-[#0f0f0f] font-roboto'>Subscriptions</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideBar
