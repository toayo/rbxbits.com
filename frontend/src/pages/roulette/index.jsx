import React, { Component } from 'react';

export default class RouletteGame extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <main className="flex text-bright flex-wrap justify-center overflow-scroll h-full p-12">
                <div className="w-full grid grid-cols-12 gap-6">
                    <div className='2xl:col-span-4 col-span-12'>
                        <section className="p-5 ring ring-first bg-boxed rounded-[12px]">
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
                                    <input type="text" className="focus:outline-none bg-inner font-medium px-4 text-xs rounded-md py-3 w-full" placeholder='100.00' />
                                </div>
                            </div>

                            <div className="mt-7">
                                <button className="w-full px-4 py-3 rounded-md bg-first uppercase text-white hover:bg-supreme duration-200 transition-all hover:scale-95 hover:border-first border border-transparent">Play</button>
                            </div>
                        </section>
                    </div>
                    <section className="2xl:col-span-8 col-span-12 space-y-4">
                        <div className="p-5 ring ring-light bg-boxed rounded-[12px] w-full space-y-2">
                            <div className="py-6 px-8 rounded-md grid grid-cols-6 gap-10">
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}