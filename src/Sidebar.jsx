import React from 'react';
import Brand from './assets/Brand.png';
import lady from './assets/lady.png';
import { LiaHomeSolid } from "react-icons/lia";
import { IoSearchSharp } from "react-icons/io5";
import { HiPlus } from "react-icons/hi";
import { VscMail } from "react-icons/vsc";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { CgMenuGridR } from "react-icons/cg";

const Sidebar = ({isMobileView}) => {
    const userNav = [
        { icon: LiaHomeSolid, label: "Home" },
        { icon: IoSearchSharp, label: "Search" },
        { icon: HiPlus, label: "Plus" },
        { icon: VscMail, label: "Messages" },
        { icon: FaRegHeart, label: "Notifications" },
        { icon: lady, label: "Profile", sub: "Rope", points: "999k" },
        { icon: IoIosMenu, label: "Settings" },
    ];


    return (
        <div className='w-full h-full border-r-1 border-slate-200 py-4'>
            <div className="flex justify-center">
               {isMobileView ? <CgMenuGridR/> : <img
                    src={Brand}
                    alt="Brand"
                    className='xl:w-[120px] h-auto md:w-[100px] md:h-auto lg:w-[80px] lg:h-auto object-contain'
                />}
            </div>

            <nav className="hs-accordion-group xl:p-6 lg:p-1 md:p-1 w-full flex flex-col md:justify-center">
                <ul className="space-y-1.5">
                    {userNav.map((item, index) => (
                        <li key={index} className="hs-accordion">
                            <button
                                type="button"
                                className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex flex-row items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-none focus:bg-gray-200"
                                aria-expanded="true"
                                aria-controls="users-accordion"
                            >
                                {typeof item.icon === 'string' ? (
                                    <img src={item.icon} alt={item.label} className="w-7 h-7" />
                                ) : (
                                    <item.icon className="w-4 h-4" />
                                )}
                                {!isMobileView && <div className='flex flex-col leading-[10px]'>
                                    <span className='text-sm'>{item.label}</span>
                                    <div className='flex flex-row gap-1'>
                                        {item.sub && <span className='text-[11px] text-yellow-500'>{item.sub}</span>}
                                        {item.points && <span className='text-[11px] md:text-xs lg:text-xs text-slate-900 font-bold'>{item.points}</span>}
                                    </div>
                                </div>}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
