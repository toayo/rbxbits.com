import React, { Component } from 'react';
import RobloxDummy from "../../images/RobloxDummy.png";
import PinkCup from "../../images/pink_cup.svg";
import YellowCup from "../../images/yellow_cup.svg";
import MagentaCup from "../../images/magenta_cup.svg";
import PurpleCup from "../../images/purple_cup.svg";

class CupsGame extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <main className="flex text-bright flex-wrap justify-center overflow-scroll h-full p-10">
                <div className="w-full grid grid-cols-12 gap-4">
                    <div className='2xl:col-span-3 col-span-12'>
                        <section className="p-5 bg-boxed rounded-[12px] font-semibold">
                            <div className="w-full flex justify-between">
                                {/* To Left */}
                                <div className="flex space-x-2">
                                    <div className="w-auto rounded-md bg-inner transition-all duration-100 cursor-pointer px-4 py-2 uppercase text-xs">
                                        Manual
                                    </div>
                                    <div className="w-auto rounded-md hover:bg-inner transition-all duration-100 cursor-pointer px-4 py-2 uppercase text-xs">
                                        Auto
                                    </div>
                                </div>

                                {/* To Right */}
                                <div>
                                    <div className="w-auto rounded-md bg-inner px-4 py-2 uppercase text-xs">
                                        Fairness
                                    </div>
                                </div>
                            </div>

                            <div className="w-full space-y-2 mt-6">
                                <div>
                                    <label htmlFor="" className="text-xs uppercase tracking-wide">Amount</label>
                                    <input type="text" className="focus:outline-none bg-inner px-4 rounded-md py-3 w-full" />
                                </div>
                                <div>
                                    <label htmlFor="" className="text-xs uppercase tracking-wide">Reward</label>
                                    <input type="text" className="focus:outline-none bg-inner px-4 rounded-md py-3 w-full" />
                                </div>
                            </div>

                            <div className="mt-7">
                                <button className="w-full px-4 py-3 rounded-md bg-first uppercase font-semibold text-white hover:bg-supreme duration-200 transition-all hover:scale-95 hover:border-first border border-transparent">Play</button>
                            </div>
                        </section>
                    </div>
                    <section className="2xl:col-span-9 col-span-12 space-y-4">
                        {[0, 0, 0, 0, 0].map(i => {
                            return <div className="p-5 bg-boxed rounded-[12px] w-full space-y-2">
                                <div className="py-6 px-8 bg-inner rounded-md grid grid-cols-2">
                                    <div className="flex flex-wrap items-center space-x-2">
                                        <div className="space-y-4">
                                            <img src={`https://tr.rbxcdn.com/30DAY-AvatarHeadshot-114D77A01952BF0F9790CE2B31C17C31-Png/48/48/AvatarHeadshot/Webp/isCircular`} className="ring-2 ring-cups-magenta w-10 h-10 rounded-full bg-boxed" alt="" />
                                            <img src={`https://tr.rbxcdn.com/30DAY-AvatarHeadshot-114D77A01952BF0F9790CE2B31C17C31-Png/48/48/AvatarHeadshot/Webp/isCircular`} className="ring-2 ring-cups-pink w-10 h-10 rounded-full bg-boxed" alt="" />
                                        </div>

                                        <span className='font-bold '>
                                            vs
                                        </span>

                                        <div className="space-y-4">
                                            <img src={`https://tr.rbxcdn.com/30DAY-AvatarHeadshot-114D77A01952BF0F9790CE2B31C17C31-Png/48/48/AvatarHeadshot/Webp/isCircular`} className="ring-2 ring-cups-yellow w-10 h-10 rounded-full bg-boxed" alt="" />
                                            <img src={`https://tr.rbxcdn.com/30DAY-AvatarHeadshot-114D77A01952BF0F9790CE2B31C17C31-Png/48/48/AvatarHeadshot/Webp/isCircular`} className="ring-2 ring-cups-purple w-10 h-10 rounded-full bg-boxed" alt="" />
                                        </div>
                                    </div>

                                    <div className="flex items-center float-right">
                                        <div className="flex float-right flex-wrap justify-center space-x-10 items-center">
                                            <img src={MagentaCup} alt={`Pink Cup Picture`} />
                                            <img src={PinkCup} alt={`Pink Cup Picture`} />
                                            <img src={YellowCup} alt={`Pink Cup Picture`} />
                                            <img src={PurpleCup} alt={`Pink Cup Picture`} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })}
                    </section>
                </div>
            </main>
        );
    }
}

export default CupsGame;
