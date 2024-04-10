import Config from "../../config"
import React from "react"
import TermsOfUse from "../Modals/TermsOfUse"
import Register from "../Modals/Register"
import Login from "../Modals/Login"

export default class CoreMenu extends React.Component {
    state = {
        showingModal: null,
    }

    render() {
        return <header className="font-madimi border-b border-light text-white flex justify-between items-center h-full px-6">
            {
                this.state.showingModal
            }

            <a className="text-xl" href={`/`}>
                <span className="capitalize">
                    {Config.App.Domain.Name}
                </span>
                <span className="text-first">
                    {Config.App.Domain.TLD}
                </span>
            </a>

            <nav className="uppercase flex justify-center space-x-9 text-relaxed uppercase text-[13px]">
                <a href="#" className="hover:text-gray-100 hover:scale-105 duration-100 transition-all flex flex-wrap space-x-[5px] items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20q1.875 0 3.188-1.312T16.5 15.5q0-1.875-1.312-3.187T12 11q-1.875 0-3.187 1.313T7.5 15.5q0 1.875 1.313 3.188T12 20M9.075 9.7q.5-.275 1.063-.437t1.137-.213L8.75 4h-2.5zm5.85 0l2.85-5.7H15.25l-2.125 4.25l.475.95q.35.1.675.213t.65.287M6.4 18.8q-.425-.725-.663-1.562T5.5 15.5q0-.9.238-1.737T6.4 12.2q-1.05.35-1.725 1.238T4 15.5q0 1.175.675 2.063T6.4 18.8m11.2 0q1.05-.35 1.725-1.237T20 15.5q0-1.175-.675-2.062T17.6 12.2q.425.725.663 1.563T18.5 15.5q0 .9-.238 1.738T17.6 18.8M12 22q-1 0-1.912-.288T8.4 20.926q-.225.05-.45.063T7.475 21Q5.2 21 3.6 19.4T2 15.525Q2 13.35 3.45 11.8t3.575-1.725L3 2h7l2 4l2-4h7l-4 8.025q2.125.2 3.563 1.75T22 15.5q0 2.3-1.6 3.9T16.5 21q-.225 0-.462-.012t-.463-.063q-.775.5-1.675.788T12 22M9.075 9.7L6.25 4zm5.85 0l2.85-5.7zm-4.775 8.55l.7-2.275L9 14.65h2.275l.725-2.4l.725 2.4H15l-1.85 1.325l.7 2.275l-1.85-1.4z"></path></svg>
                    </span>
                    <span>Leaderboard</span>
                </a>

                <button onClick={() => {
                    this.setState({
                        showingModal: (
                            <TermsOfUse onClose={() => {
                                this.setState({
                                    showingModal: null
                                })
                            }} ></TermsOfUse>
                        )
                    })
                }} className="cursor-pointer hover:text-gray-100 hover:scale-105 duration-100 transition-all flex flex-wrap space-x-[5px] items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 192a24 24 0 0 1-24 24H88a24 24 0 0 0 24-24c0-10-8-16-8-16h112s8 6 8 16" opacity={0.2}></path><path d="M96 104a8 8 0 0 1 8-8h64a8 8 0 0 1 0 16h-64a8 8 0 0 1-8-8m8 40h64a8 8 0 0 0 0-16h-64a8 8 0 0 0 0 16m128 48a32 32 0 0 1-32 32H88a32 32 0 0 1-32-32V64a16 16 0 0 0-32 0c0 5.74 4.83 9.62 4.88 9.66A8 8 0 0 1 24 88a7.89 7.89 0 0 1-4.79-1.61C18.05 85.54 8 77.61 8 64a32 32 0 0 1 32-32h136a32 32 0 0 1 32 32v104h8a8 8 0 0 1 4.8 1.6c1.2.86 11.2 8.79 11.2 22.4M96.26 173.48A8.07 8.07 0 0 1 104 168h88V64a16 16 0 0 0-16-16H67.69A31.71 31.71 0 0 1 72 64v128a16 16 0 0 0 32 0c0-5.74-4.83-9.62-4.88-9.66a7.82 7.82 0 0 1-2.86-8.86M216 192a12.58 12.58 0 0 0-3.23-8h-94a26.92 26.92 0 0 1 1.21 8a31.82 31.82 0 0 1-4.29 16H200a16 16 0 0 0 16-16"></path></g></svg>
                    </span>
                    <span className="uppercase">
                        Terms of Use
                    </span>
                </button>

                <a href="#" className="hover:text-gray-100 hover:scale-105 duration-100 transition-all flex flex-wrap space-x-[5px] items-center">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-6h-2zm1-8q.425 0 .713-.288T13 8q0-.425-.288-.712T12 7q-.425 0-.712.288T11 8q0 .425.288.713T12 9m0 13q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v6.1q0 3.8-2.262 6.913T12 22m0-2.1q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"></path></svg>
                    </span>
                    <span>
                        Privacy Policy
                    </span>
                </a>
            </nav>

            <div className="flex flex-wrap items-center">
                <button
                    onClick={() => {
                        this.setState({
                            showingModal: (
                                <Login onClose={() => {
                                    this.setState({
                                        showingModal: null
                                    })
                                }} ></Login>
                            )
                        })
                    }}
                    className="text-white px-8" href={`/login`}>Login</button>

                <button
                    onClick={() => {
                        this.setState({
                            showingModal: (
                                <Register onClose={() => {
                                    this.setState({
                                        showingModal: null
                                    })
                                }} ></Register>
                            )
                        })
                    }}
                    href="/signup" className="flex transition-all text-sm tracking duration-300 hover:shadow-md hover:scale-95 hover:bg-supreme shadow-none flex-wrap items-center
             text-center justify-center bg-first rounded-md text-white py-3 focus:outline-none px-8 uppercase">
                    <span>
                        Join Now
                    </span>
                </button>
            </div>
        </header >
    }
}