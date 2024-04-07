import React, { Component } from 'react';
import Secrets from '../../config/secrets';

export default class EarnPage extends Component {
    state = {
        embed: null
    }

    render() {
        return (
            <main className="flex text-bright flex-wrap justify-center overflow-scroll h-full p-12">
                <div className="w-full">
                    <div className='flex flex-wrap grid-cols-8 grid gap-3'>
                        {Object.keys(Secrets.Offerwalls).map((k, index) => {
                            const wall = Secrets.Offerwalls[k]

                            return (
                                <button onClick={() => {
                                    this.setState({
                                        embed: wall.Embed
                                    })
                                }} key={index} className="w-auto px-8 py-3 rounded-md bg-first uppercase text-white hover:bg-supreme duration-200 transition-all hover:scale-95 hover:border-first border border-transparent">
                                    {k}
                                </button>
                            )
                        })}
                    </div>

                    <section className="flex flex-wrap jw-full ustify-center">
                        <div className="p-5 ring ring-light bg-boxed rounded-[12px] w-full mt-5 space-y-2">
                            <div className="py-6 px-6 rounded-md grid grid-cols-6 gap-6">
                                {
                                    this.state.embed != null ?
                                        (
                                            <iframe src={this.state.embed} title='Earn R$ Offerwall' frameborder="0"></iframe>
                                        ) : null
                                }
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        );
    }
}