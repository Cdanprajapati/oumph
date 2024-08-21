import React, { useRef, useState } from 'react';
import profile from './assets/irr.png';
import { TbBriefcase2Filled } from "react-icons/tb";
import { MdHome } from "react-icons/md";
import emoji from './assets/emojji.png';
import { FaPlus } from "react-icons/fa6";
import Tooltip from './Common-compo/Tooltip';
import SquareChips from './Common-compo/SquareChips';
import { IoIosPeople, IoIosPaper } from 'react-icons/io'; // Adjust imports as necessary
import { FaHandsHoldingChild, FaHandsHoldingCircle } from 'react-icons/fa6';
import { GiSamuraiHelmet } from 'react-icons/gi';
import { GiPartyPopper } from "react-icons/gi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/girl.png'

const userRating = [
    {label: "IQ", points: 3.5, colors: "rose" },
    { label: "Appeal", points: 4.0, color: "orange" },
    { label: "Social", points: 4.2, color: "blue" },
    { label: "Humanity", points: 3.8, color: "lime" }
];

const followers = [
    { count: "15", label: "Inner" },
    { count: "2.3k", label: "Outer" },
    { count: "2.3k", label: "Universe" }
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
    ];


    const handleMouseDown = (event) => {
        event.preventDefault();
        const shiftX = event.clientX - emojiRef.current.getBoundingClientRect().left;

        const onMouseMove = (event) => {
            let newLeft = event.clientX - shiftX - containerRef.current.getBoundingClientRect().left;

            // Restrict movement within the bounds of the parent div
            const rightEdge = containerRef.current.offsetWidth - emojiRef.current.offsetWidth;
            if (newLeft < 0) newLeft = 0;
            if (newLeft > rightEdge) newLeft = rightEdge;

            setPosition(newLeft);

            // Calculate the decimal position based on the total length of 5
            const decimalPosition = (newLeft / rightEdge) * 5;
            setDisplayPosition(decimalPosition.toFixed(1)); // Show one decimal place
        };

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;
        };
    };

    return (
        <div className='flex flex-col w-full border border-slate-100 bg-white mx-auto justify-center py-9 px-7'>
            <div className='flex mx-auto '>
                <div className='flex flex-col justify-center items-center text-center'>
                    <img src={profile} alt="img" className='h-[150px] w-[160px] mx-auto' />
                    <p className='text-lg font-bold mx-auto'>70%<span className='font-light text-sm'> Vibes Match</span></p>
                </div>

                <div className='justify-between space-x-4 '>
                    <div className='flex flex-row '>
                        <div>
                            <p className='text-[10px] text-slate-500 mx-auto'>(0.0 Vibes)</p>
                            <h1 className='text-2xl font-bold mx-2'>4.2</h1>
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

                    <div className='flex flex-row justify-between'>
                        <div>
                            <h1 className='font-bold text-sm text-slate-900'>Ironmanfanpage</h1>
                            <p className='text-xs text-slate-600 font-medium'>@ironmanisbest</p>
                        </div>
                        <button
                            className="bg-slate-50 text-sky-400 my-auto shadow-xl text-xs rounded-full font-medium px-4 border border-slate-100
                             h-[25px] mr-[50px]">Join now</button>
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
                                        <h1 className='text-slate-600 font-semibold'>{item.count}</h1>
                                        <p className='font-light text-xs text-slate-500'>{item.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className='text-slate-500 text-sm w-[400px] my-4'>Greatest superhero of all the time. Perfect combination of intelligence and looks</p>

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
            <div className='flex flex-row gap-2 w-[60%] mx-auto my-6'>
                <button
                    className="bg-slate-50 text-slate-600 shadow-xl text-xs rounded-full font-normal px-4 border border-slate-100 h-[25px] mt-3">
                    Send Vibe
                </button>
                <div ref={containerRef} className="relative w-[80%] mt-6">
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
                <div className="space-y-4 flex flex-row w-full text-center items-center gap-2">
                    <FaPlus className='mt-3 text-bold cursor-pointer' />
                    {userNames?.map((name, index) => (
                        <Tooltip key={index} name={name} />
                    ))}
                </div>
                <div className="flex flex-wrap gap-4 p-4 mx-auto">
                    {chipsIcons.map((chip, index) => (
                        <SquareChips
                            key={index}
                            name={chip.label}
                            icon={chip.icon}
                        />
                    ))}
                </div>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto flex flex-wrap flex-col border-b-2 border-slate-200">
                        <div className="flex mx-auto flex-wrap">
                            {userNave?.map((item, index) => (
                                <a
                                    key={index}
                                    href="#"
                                    className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center text-xs leading-none border-transparent text-gray-500 hover:text-pink-500 hover:border-pink-500 tracking-wider rounded-t transition duration-300 ease-in-out "
                                >
                                    <item.icon className="w-5 h-5 mr-3" />
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>
                <div className='w-full flex flex-wrap text-center items-center'>
                    <div className="space-y-4 flex flex-row w-full text-center items-center my-2">
                        {navbarItems?.map((name, index) => (
                            <Tooltip key={index} name={name.label} />
                        ))}
                    </div>
                </div>
                <div className='flex flex-wrap my-3'>
                    {galleryImg?.map((item, i) => (
                        <img
                            src={item.img}
                            alt="img"
                            className='m-1 h-[30%] w-[30%]'
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default dashboard;
