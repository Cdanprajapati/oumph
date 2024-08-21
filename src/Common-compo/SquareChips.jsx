import React from 'react';

const SquareChips = ({ name, icon: Icon }) => {
  return (
    <div className='bg-[#F0F1F4] rounded-xl h-[80px] w-[80px] flex items-center justify-center p-4 my-10 cursor-pointer shadow-lg'>
      <div className='flex flex-col text-center items-center'>
        {Icon && <div className='text-xl mb-2 text-slate-400 hover:text-pink-600'>
          <Icon />
          </div>}
        <p className='text-xs font-normal transition-colors duration-300 text-slate-400 hover:text-pink-600'>
          {name}
        </p>
      </div>
    </div>
  );
};

export default SquareChips;
