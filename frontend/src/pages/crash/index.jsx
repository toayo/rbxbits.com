import React, { Component } from 'react';
import PinkCup from "../../images/pink_cup.svg";
import YellowCup from "../../images/yellow_cup.svg";
import MagentaCup from "../../images/magenta_cup.svg";
import PurpleCup from "../../images/purple_cup.svg";
import CustomModal from '../../components/Modals/CustomModal';

export default class CrashGame extends Component {
    state = {
        isPlayModal: false,
    }

    componentDidMount() {

    }

    render() {
        return (
            <main className="flex text-bright flex-wrap justify-center overflow-scroll h-full p-8">
                <CustomModal isOpen={this.state.isPlayModal} opacity={0.6}>
                    <div className="bg-inner mb-42 h-auto w-6/12 rounded-lg shadow-sm px-6 py-6">

                    </div>
                </CustomModal>

                <div className="w-full grid grid-cols-12 gap-6">
                    <div className='2xl:col-span-4 col-span-12'>
                        <section className="p-5 ring ring-first bg-boxed rounded-[12px] font-semibold">
                            <div className="w-full flex justify-between">
                                <div className="flex space-x-2">
                                    <div className="w-auto rounded-md bg-inner transition-all duration-100 cursor-pointer px-4 py-2 uppercase text-xs">
                                        Manual
                                    </div>
                                    <div className="w-auto rounded-md hover:bg-inner transition-all duration-100 cursor-pointer px-4 py-2 uppercase text-xs">
                                        Auto
                                    </div>
                                </div>

                                <div>
                                    <div className="w-auto rounded-md bg-inner px-4 py-2 uppercase text-xs">
                                        Fairness
                                    </div>
                                </div>
                            </div>

                            <div className="w-full space-y-2 mt-6">
                                <div>
                                    <label htmlFor="" className="text-xs uppercase tracking-wide">Amount</label>
                                    <input type="text" className="focus:outline-none bg-inner font-medium px-4 text-xs rounded-md py-3 w-full" placeholder='100.00' />
                                </div>
                                <div>
                                    <label htmlFor="" className="text-xs uppercase tracking-wide">Reward</label>
                                    <input type="text" className="focus:outline-none bg-inner font-medium px-4 text-xs rounded-md py-3 w-full" placeholder='2x' />
                                </div>
                            </div>

                            <div className="mt-7">
                                <button onClick={(e) => {
                                    this.setState({
                                        ...this.state,
                                        isPlayModal: !this.state.isPlayModal
                                    })
                                }} className="w-full px-4 py-3 rounded-md bg-first uppercase text-white hover:bg-supreme duration-200 transition-all hover:scale-95 hover:border-first border border-transparent">Play</button>
                            </div>
                        </section>

                        <section className="p-5 mt-5 bg-boxed rounded-[12px]">
                            <div className="w-full flex justify-between">
                                <div className="flex space-x-2">
                                    <h3>
                                        <span> 10 </span>
                                        <span>
                                            Players
                                        </span>
                                    </h3>
                                </div>

                                <div>
                                    <div className="text-white w-auto rounded-md uppercase text-xs">
                                        124.04 R$
                                    </div>
                                </div>
                            </div>

                            <div className="w-full mt-6">
                                <div>
                                    <div className='bg-inner flex flex-wrap items-center space-x-3 font-medium px-4 text-xs rounded-md py-3 w-full'>
                                        <img src={`https://tr.rbxcdn.com/30DAY-AvatarHeadshot-114D77A01952BF0F9790CE2B31C17C31-Png/48/48/AvatarHeadshot/Webp/isCircular`} className="w-8 h-8 rounded-full bg-boxed" alt="" />
                                        <span> JUB0T </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>



                    <section className="2xl:col-span-8 col-span-12 space-y-4">
                    </section>
                </div>
            </main>
        );
    }
}
