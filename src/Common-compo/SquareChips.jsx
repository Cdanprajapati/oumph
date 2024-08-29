import React from 'react';

const SquareChips = ({ name, icon: Icon }) => {
  return (
    <div 
      className='group square-chip bg-[#F0F1F4] rounded-xl h-[80px] w-[80px] flex items-center justify-center p-4 my-10 sm:my-2 md:my-2 cursor-pointer shadow-lg transition-all duration-300 hover:bg-[#eeecec] hover:shadow-xl hover:scale-105 focus:bg-red-100'
      tabIndex="0"
    >
      <div className='flex flex-col text-center items-center'>
        {Icon && <div className='text-xl mb-2 text-slate-400 transition-colors duration-300 group-hover:text-pink-600 
        group-focus:text-pink-600'>
          <Icon />
        </div>}
        <p className='text-xs font-normal transition-colors duration-300 text-slate-400 group-hover:text-pink-600 group-hover:font-semibold group-focus:text-pink-600'>
          {name}
        </p>
      </div>
    </div>
  );
};

export default SquareChips;