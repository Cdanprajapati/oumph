import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import DashBoard from './Dashboard';

const App = () => {

  const [isBelow1024, setIsBelow1024] = useState(window.innerWidth < 650);

  console.log(isBelow1024, "////////////");

  useEffect(() => {
    const handleResize = () => {
      setIsBelow1024(window.innerWidth < 650);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='w-full h-[100vh] flex'>
      <div className='bg-white h-[100vh]'>
        <Sidebar isMobileView={isBelow1024} />
      </div>
      <div className='bg-red-200 w-full overflow-y-scroll'>
        <DashBoard />
      </div>
    </div>
  )
}

export default App