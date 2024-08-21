import React from 'react';
import Sidebar from './Sidebar';
import DashBoard from './Dashboard';

const App = () => {
  return (
    <div className='w-full h-[100vh] flex flex-row'>
      <div className='bg-white w-[15%] h-[100vh]'>
        <Sidebar />
      </div>
      <div className='bg-red-200 w-[85%] overflow-y-scroll'>
        <DashBoard />
      </div>
    </div>
  )
}

export default App