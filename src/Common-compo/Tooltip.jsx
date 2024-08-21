import React from 'react';
import Profile from '../assets/lady.png'; 

const Tooltip = ({ name }) => {
  return (
    <div className='bg-[#F0F1F4] rounded-full flex items-center space-x-2 mx-1 shadow-lg cursor-pointer'>
      <img src={Profile} alt="Profile" className='w-7 h-7 rounded-full border border-sky-300' />
      <p className='text-xs px-3 mx-auto'>{name}</p>
    </div>
  );
};

export default Tooltip;
