import React from 'react';
import Profile from '../assets/lady.png';

const Tooltip = ({ name }) => {
  return (
    <div className='bg-[#F0F1F4] rounded-full flex items-center my-2 mx-2 shadow-lg cursor-pointer 
                hover:bg-sky-100 hover:shadow-xl transition-all duration-300 hover:scale-110 '>
      <img src={Profile} alt="Profile" className='w-6 h-6 rounded-full border border-sky-300 hover:border-pink-500 transition-all duration-300' />
      <p className='text-[10px] mx-auto flex justify-center text-slate-500 hover:text-slate-950 hover:font-semibold transition-colors duration-300 px-3'>
        {name}
      </p>
    </div>
  );
};

export default Tooltip;
