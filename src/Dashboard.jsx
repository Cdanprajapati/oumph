import img3 from './assets/gimg-1.png';
import img2 from './assets/gimg-3.png';
import img1 from './assets/gimg-2.png';
import profile from './assets/irr.png';
import { MdHome } from "react-icons/md";
import emoji from './assets/emojji.png';
import { FaPlus } from "react-icons/fa6";
import Tooltip from './Common-compo/Tooltip';
import { GiPartyPopper } from "react-icons/gi";
import React, { useRef, useState } from 'react';
import { GiSamuraiHelmet } from 'react-icons/gi';
import { TbBriefcase2Filled } from "react-icons/tb";
import SquareChips from './Common-compo/SquareChips';
import { IoIosPeople, IoIosPaper } from 'react-icons/io';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaHandsHoldingChild, FaHandsHoldingCircle } from 'react-icons/fa6';

const userRating = [
    { label: "IQ", points: 3.5, colors: "rose" },
    { label: "Appeal", points: 4.0, color: "orange" },
    { label: "Social", points: 4.2, color: "blue" },
    { label: "Humanity", points: 3.8, color: "lime" }
];

const followers = [
    { count: "15", label: "Inner", textColor: "text-slate-900" },
    { count: "2.3k", label: "Outer", textColor: "text-slate-500" },
    { count: "2.3k", label: "Universe", textColor: "text-slate-400" }
];

const textData = [
    { icon: TbBriefcase2Filled, label: "CEO, Ooumph " },
    { icon: MdHome, label: "Lucknow, India" },
];

const chipsIcons = [
    { label: "People", icon: IoIosPeople },
    { label: "Content", icon: IoIosPaper },
    { label: "Community", icon: FaHandsHoldingChild },
    { label: "Offer", icon: FaHandsHoldingCircle }
];

const userNave = [
    { icon: GiSamuraiHelmet, label: "Truth" },
    { icon: GiPartyPopper, label: "Fun" },
    { icon: GiSamuraiHelmet, label: "Debate" },
    { icon: IoIosInformationCircleOutline, label: "Opportunity" },
];

const navbarItems = [
    { label: "MOOD" },
    { label: "IQ" },
    { label: "APPEAL" },
    { label: "SOCIAL" },
    { label: "IQ" },
    { label: "APPEAL" },
    { label: "SOCIAL" },
    { label: "IQ" },
    { label: "APPEAL" },
    { label: "SOCIAL" },
];

const galleryImg = [
    { img: img3 },
    { img: img1 },
    { img: img2 },
];

const dashboard = () => {
    const [position, setPosition] = useState(0);
    const [displayPosition, setDisplayPosition] = useState(0);
    const containerRef = useRef(null);
    const emojiRef = useRef(null);

    const userNames = [
        'Alice',
        'Bob',
        'Charlie',
        'David',
        'Eve',
        'Frank',
        'Grace',
        'Hannah',
        'Eve',
        'Frank'
    ];

    const handleMouseDown = (event) => {
        event.preventDefault();
        const shiftX = event.clientX - emojiRef.current.getBoundingClientRect().left;

        const onMouseMove = (event) => {
            let newLeft = event.clientX - shiftX - containerRef.current.getBoundingClientRect().left;
            const rightEdge = containerRef.current.offsetWidth - emojiRef.current.offsetWidth;
            if (newLeft < 0) newLeft = 0;
            if (newLeft > rightEdge) newLeft = rightEdge;
            setPosition(newLeft);
            const decimalPosition = (newLeft / rightEdge) * 5;
            setDisplayPosition(decimalPosition.toFixed(1));
        };

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    return (
        <div className='flex flex-col w-full border border-slate-100 bg-white mx-auto justify-center py-9 sm:py-5 sm:px-2'>
            <div className='flex flx-row mx-auto xs:flex-col sm:flex-col gap-6 md:flex-col lg:flex-row sm:w-full md:w-full px-4'>
                <div className='flex flex-col justify-center items-center text-center w-full'>
                    <img src={profile} alt="img" className='h-[180px] w-[190px] mx-auto' />
                    <p className='text-lg font-bold mx-auto'>70%<span className='font-light text-sm'> Vibes Match</span></p>
                </div>

                <div className='justify-between'>
                    <div className='flex flex-row sm:flex-col md:flex-row'>
                        <div className='sm:mx-auto md:mx-auto my-auto'>
                            <p className='text-[10px] text-slate-500 mx-auto'>(0.0 Vibes)</p>
                            <h1 className='text-[25px] font-[800] mx-2'>4.2</h1>
                        </div>

                        <div className='flex'>
                            {userRating?.map((item, i) => (
                                <ul key={i}>
                                    <li className='space-x-3 flex flex-col justify-center text-center items-center mx-2'>
                                        <h1 className='text-xs font-medium mx-auto tracking-wide my-2'>{item.label}</h1>
                                        <div className="relative w-[50px] h-[50px] mx-auto">
                                            <div className="absolute inset-0 flex items-center justify-center h-full">
                                                <span className="text-xs font-medium text-slate-500">{item.points.toFixed(2)}</span>
                                            </div>

                                            <div className="absolute inset-0 h-full">
                                                <div className="absolute w-[5px] h-[5px] bg-pink-600 rounded-full" style={{ top: '6%', left: '48%', transform: 'translate(-50%, 0%)' }}></div>
                                                <div className="absolute w-[5px] h-[5px] bg-pink-800 rounded-full" style={{ top: '16%', left: '74%', transform: 'translate(-50%, -50%)' }}></div>
                                                <div className="absolute w-[5px] h-[5px] bg-pink-950 rounded-full" style={{ top: '60%', left: '100%', transform: 'translate(-50%, -50%)' }}></div>
                                                <div className="absolute w-[5px] h-[5px] bg-pink-600 rounded-full" style={{ top: '18%', left: '25%', transform: 'translate(-50%, -50%)' }}></div>
                                                <div className="absolute w-[5px] h-[5px] bg-pink-200 rounded-full" style={{ top: '60%', left: '0%', transform: 'translate(-50%, -50%)' }}></div>
                                                <div className="absolute w-[5px] h-[5px] bg-pink-300 rounded-full" style={{ top: '36%', left: '7%', transform: 'translate(-50%, -50%)' }}></div>
                                                <div className="absolute w-[5px] h-[5px] bg-pink-950 rounded-full" style={{ top: '34%', left: '92%', transform: 'translate(-50%, -50%)' }}></div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-row justify-between sm:w-full md:w-full'>
                        <div>
                            <h1 className='font-bold text-sm text-slate-900'>Ironmanfanpage</h1>
                            <p className='text-xs text-slate-600 font-medium'>@ironmanisbest</p>
                        </div>
                        <button
                            className="bg-white outline-none text-sky-500 my-auto shadow-lg text-center rounded-full 
             font-semibold px-5 py-1 border border-slate-50 text-sm
             transform transition-transform duration-300 hover:scale-110 hover:shadow-3xl">
                            Join Now
                        </button>
                    </div>

                    <div>
                        <div className='flex flex-col my-7'>
                            <div className='flex flex-row px-2 my-2'>
                                <p className='text-slate-400 text-xs font-medium tracking-widest'>Vibers: 5.2k</p>
                                <div className='mx-10'>
                                    <p className='text-slate-400 text-xs font-medium tracking-widest'>Posts: 25</p>
                                </div>
                            </div>

                            <div className='bg-slate-100 rounded-2xl flex flex-row p-1 justify-around w-[200px]'>
                                {followers.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`flex flex-col ${i === 0 || i === 1 ? 'border-r-2 border-gray-300' : ''} px-3 text-center items-center`}
                                    >
                                        <h1 className={`${item.textColor} font-bold`}>{item.count}</h1>
                                        <p className={`font-normal text-xs ${item.textColor}`}>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className='text-slate-500 text-sm w-full sm:w-3/4 md:w-[400px] lg:w-1/2 my-4'>
                            Greatest superhero of all the time. Perfect combination of intelligence and looks
                        </p>

                        <div>
                            <ul className='flex flex-row space-x-3'>
                                {textData?.map((item, i) => (
                                    <li key={i} className="flex items-center space-x-2">
                                        <item.icon className="text-sm text-slate-600" />
                                        <p className='text-slate-600 text-xs'>{item.label}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row gap-5 w-[60%] mx-auto my-6 sm:w-full sm:flex-row md:flex-row lg:flex-row px-4 md:w-full justify-center'>
                <button
                    className="bg-[#f0efef] text-slate-600 shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] text-xs rounded-full py-2 border border-[#f0efef] w-[80px] mt-3 transform transition-transform duration-300 hover:scale-110 hover:shadow-lg font-semibold">
                    Send Vibe
                </button>
                <div ref={containerRef} className="relative w-[60%] mt-6 sm:w-full md:w-full">
                    <hr className="w-full border-0 h-[2px] bg-gradient-to-r from-pink-500 via-green-500 to-yellow-300" />

                    <div
                        ref={emojiRef}
                        className="absolute top-[-18px] cursor-pointer text-2xl"
                        style={{ left: position }}
                        onMouseDown={handleMouseDown}
                    >
                        <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 text-sm -mt-2">
                            {displayPosition}
                        </div>
                        <div className='flex text-slate-500'>
                            (( <img src={emoji} alt="emoji" className='h-10 w-10' /> ))
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col w-[90%] mx-auto'>
                <div className="space-y-4 flex flex-row w-full text-center items-center gap-2 sm:flex-wrap md:flex-wrap">
                    <div className='w-[20%]'>

                    </div>
                    <div className='flex flex-row w-full sm:flex-wrap md:flex-wrap lg:flex-wrap'>
                        <FaPlus className='my-auto text-bold cursor-pointer' />
                        {userNames?.map((name, index) => (
                            <Tooltip key={index} name={name} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-wrap gap-4 p-4 mx-auto sm:gap-2 md:gap-2">
                    {chipsIcons.map((chip, index) => (
                        <SquareChips
                            key={index}
                            name={chip.label}
                            icon={chip.icon}
                        />
                    ))}
                </div>
                <section className="text-gray-600 body-font w-[70%] sm:w-full md:w-full lg:w-full mx-auto">
                    <div className="px-5 sm:px-0 md:px-0 mx-auto flex flex-wrap flex-col border-b-2 border-slate-200">
                        <div className="flex mx-auto flex-row lg:w-[80%] md:w-1/2 sm:w-full w-[40%]">
                            {userNave?.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="py-3 w-full sm:w-auto gap-2 border-b-2 title-font font-medium inline-flex items-center text-xs leading-none border-transparent text-gray-500 hover:text-pink-500 hover:border-pink-500 tracking-wider rounded-t transition duration-300 ease-in-out focus:outline-none mx-5 sm:mx-1 md:mx-1 focus:text-pink-500 focus:border-pink-500"
                                >
                                    <item.icon className="w-5 h-5" />
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
                <div className='flex text-center items-center w-full mx-auto'>
                    <div className='w-[20%] sm:w-0 md:w-0'>
                    </div>
                    <div className="py-5 flex flex-row sm:flex-wrap md:flex-wrap lg:flex-wrap w-full text-center items-center my-2">
                        {navbarItems?.map((name, index) => (
                            <Tooltip key={index} name={name.label} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-row my-1 mx-auto gap-1'>
                    {galleryImg?.map((item, i) => (
                        <img
                            src={item.img}
                            alt="img"
                            className='h-[35%] w-[35%] rounded-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default dashboard;
