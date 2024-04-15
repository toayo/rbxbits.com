import React, { useState } from "react"
import { Link } from "react-router-dom"
import Promocode from "../Modals/Promocode"


export default function SidebarCore() {
    const [showingModal, setShowingModal] = useState(null);

    const Games = {
        Towers: {
            Location: "/towers",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M12 2a1 1 0 0 1 .993.883L13 3v.723l.166.277H14a1 1 0 0 1 .445 1.896l-.113.047L15.566 8H17a1 1 0 0 1 .117 1.993L17 10h-1c.628.836 1 1.874 1 3a4.992 4.992 0 0 1-2 4a5.005 5.005 0 0 1 1.845 2.758L16.9 20H19a1 1 0 0 1 .117 1.993L19 22H5a1 1 0 0 1-.117-1.993L5 20h2.1A5 5 0 0 1 9 17a4.992 4.992 0 0 1-2-4c0-1.032.313-1.99.848-2.787L8 10H7a1 1 0 0 1-.117-1.993L7 8h1.434l1.234-2.057a1 1 0 0 1 .215-1.936L10 4h.834L11 3.723V3a1 1 0 0 1 1-1m.034 4h-.068l-1.2 2h2.468z"></path></g></svg>
        },

        Crash: {
            Location: "/crash",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9.034 5.963L6.491 8.5c-.467.466-.896.893-1.235 1.28a6.08 6.08 0 0 0-.619.82l-.024-.025l-.095-.094a4.857 4.857 0 0 0-1.532-1.004l-.123-.05l-.379-.15a.764.764 0 0 1-.259-1.252C3.345 6.907 4.69 5.566 5.34 5.297a3.38 3.38 0 0 1 1.788-.229c.546.081 1.063.362 1.907.895m4.342 13.35c.205.208.34.355.464.512c.162.207.307.427.434.658c.142.26.253.537.474 1.092a.691.691 0 0 0 1.126.224l.084-.083c1.12-1.117 2.465-2.458 2.735-3.105a3.35 3.35 0 0 0 .229-1.782c-.081-.545-.362-1.06-.897-1.902l-2.552 2.544c-.478.477-.916.914-1.313 1.256c-.237.206-.497.41-.784.586"></path><path fill="currentColor" fillRule="evenodd" d="m14.447 16.377l5.847-5.83c.842-.839 1.263-1.259 1.484-1.792C22 8.22 22 7.627 22 6.44v-.567c0-1.826 0-2.739-.569-3.306C20.862 2 19.947 2 18.116 2h-.57c-1.19 0-1.785 0-2.32.221c-.536.221-.957.641-1.8 1.48L7.58 9.531c-.984.98-1.594 1.589-1.83 2.176a1.48 1.48 0 0 0-.112.562c0 .802.647 1.448 1.942 2.739l.174.173l2.038-2.069a.75.75 0 1 1 1.069 1.053L8.816 16.24l.137.137c1.295 1.29 1.943 1.936 2.747 1.936c.178 0 .348-.031.519-.094c.603-.222 1.219-.836 2.228-1.842m2.747-6.846a1.946 1.946 0 0 1-2.747 0a1.932 1.932 0 0 1 0-2.738a1.946 1.946 0 0 1 2.747 0a1.932 1.932 0 0 1 0 2.738" clipRule="evenodd"></path></svg>
        },

        Roulette: {
            Location: "/roulette",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5s-2.01 4.5-4.5 4.5m0-5.5c-.55 0-1 .45-1 1s.45 1 1 1s1-.45 1-1s-.45-1-1-1"></path></svg>
        },

        Mines: {
            Location: "/mines",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M248 32a8 8 0 0 0-8 8a52.66 52.66 0 0 1-3.57 17.39C232.38 67.22 225.7 72 216 72c-11.06 0-18.85-9.76-29.49-24.65C176 32.66 164.12 16 144 16c-16.39 0-29 8.89-35.43 25a66.07 66.07 0 0 0-3.9 15H88a16 16 0 0 0-16 16v9.59A88 88 0 0 0 112 248h1.59A88 88 0 0 0 152 81.59V72a16 16 0 0 0-16-16h-15.12a46.76 46.76 0 0 1 2.69-9.37C127.62 36.78 134.3 32 144 32c11.06 0 18.85 9.76 29.49 24.65C184 71.34 195.88 88 216 88c16.39 0 29-8.89 35.43-25A68.69 68.69 0 0 0 256 40a8 8 0 0 0-8-8M111.89 209.32A8 8 0 0 1 104 216a8.52 8.52 0 0 1-1.33-.11a57.5 57.5 0 0 1-46.57-46.57a8 8 0 1 1 15.78-2.64a41.29 41.29 0 0 0 33.43 33.43a8 8 0 0 1 6.58 9.21"></path></svg>
        },

        Cups: {
            Location: "/cups",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M18.32 8H5.67l-.44-4h13.54M3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2z"></path></svg>
        },

        Prisoner: {
            Location: "/prisoner",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2a9 9 0 0 1 6.894 14.786c1.255.83 2.034 1.89 2.101 3.049L21 20l-9 2l-9-2l.005-.165c.067-1.16.846-2.22 2.1-3.05A8.965 8.965 0 0 1 3 11a9 9 0 0 1 9-9m0 11c-1.38 0-2.5.672-2.5 1.5S10.62 16 12 16s2.5-.672 2.5-1.5S13.38 13 12 13M9 8c-1.105 0-2 .672-2 1.5S7.895 11 9 11s2-.672 2-1.5S10.105 8 9 8m6 0c-1.105 0-2 .672-2 1.5s.895 1.5 2 1.5s2-.672 2-1.5S16.105 8 15 8"></path></svg>
        }
    }

    const Mores = {
        Promocode: {
            Location: "/promocode",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z" /></svg>,
            Modal: (
                <Promocode onClose={() => {
                    setShowingModal(null)
                }} ></Promocode>
            ),
        },

        Affiliates: {
            Location: "/affiliates",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="6" r="4" /><path strokeLinecap="round" d="M19.998 18c.002-.164.002-.331.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437" /></g></svg>
        },

        Rewards: {
            Location: "/rewards",
            Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 68h-25.94A33.82 33.82 0 0 0 196 49.69A36.62 36.62 0 0 0 158.31 12A33.44 33.44 0 0 0 134 23.25a54.65 54.65 0 0 0-6 8.3a54.65 54.65 0 0 0-6-8.3A33.44 33.44 0 0 0 97.69 12A36.62 36.62 0 0 0 60 49.69A33.82 33.82 0 0 0 65.94 68H40a20 20 0 0 0-20 20v32a20 20 0 0 0 16 19.6V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-60.4a20 20 0 0 0 16-19.6V88a20 20 0 0 0-20-20m-4 48h-72V92h72Zm-60-76.83a9.59 9.59 0 0 1 7-3.17h.35A12.62 12.62 0 0 1 172 49a9.59 9.59 0 0 1-3.17 7c-6.9 6.12-18.25 9.26-27.63 10.76c1.5-9.34 4.64-20.69 10.8-27.59m-64.3.53a12.8 12.8 0 0 1 8.91-3.7H97a9.59 9.59 0 0 1 7 3.17c6.12 6.9 9.26 18.24 10.75 27.61C105.45 65.27 94 62.13 87.17 56A9.59 9.59 0 0 1 84 49a12.72 12.72 0 0 1 3.7-9.3M44 92h72v24H44Zm16 48h56v56H60Zm80 56v-56h56v56Z" /></svg>
        },
    }

    return <div className={`font-madimi bg-red flex flex-wrap h-full w-full border-r border-light`}>
        {showingModal}

        <section className="px-4 w-full">
            <section className="py-8 border-b border-light">
                <Link to="/">
                    <div className="tracking-widest hover:scale-95 text-[15px] transition-all duration-300 text-relaxed uppercase hover:text-first hover:cursor-pointer px-2 py-3 flex flex-wrap items-center space-x-2 text-sm rounded-md w-full">
                        <span className="">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0M571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93"></path></svg>
                        </span>
                        <span className="xl:block hidden">
                            Dashboard
                        </span>
                    </div>
                </Link>
            </section>

            <section className="py-8 border-b border-light">
                {
                    Object.keys(Games).map(g => {
                        const game = Games[g]

                        return <Link to={game.Location} key={g}>
                            <div key={g} className="tracking-widest hover:scale-95 text-[15px] transition-all duration-300 text-relaxed uppercase hover:text-first hover:cursor-pointer px-2 py-3 flex flex-wrap items-center space-x-2 text-sm rounded-md w-full">
                                <span className="">
                                    {game.Icon}
                                </span>
                                <span className="xl:block hidden">
                                    {g}
                                </span>
                            </div>
                        </Link>
                    })
                }
            </section>

            <section className="py-8 border-b border-light">
                {
                    Object.keys(Mores).map(m => {
                        const more = Mores[m]

                        return <button key={m} onClick={() => {
                            if (more.Modal) {
                                setShowingModal(more.Modal)
                            }
                        }}
                            className="tracking-widest hover:scale-95 text-[15px] transition-all duration-300 text-relaxed uppercase hover:text-first hover:cursor-pointer px-2 py-3 flex flex-wrap items-center space-x-2 text-sm rounded-md w-full">
                            <span className="">
                                {more.Icon}
                            </span>

                            <span className="xl:block hidden">
                                {m}
                            </span>
                        </button>
                    })
                }
            </section>

            <section className="py-8 w-full">
                <Link to={`/earn`}>
                    <div className="text-sm flex transition-all duration-300 hover:shadow-md hover:scale-95 hover:bg-supreme shadow-none flex-wrap items-center text-center justify-center bg-first rounded-md w-full text-white py-3 focus:outline-none px-6 uppercase">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15" /></svg>
                        </span>
                        <span>
                            Earn Robux
                        </span>
                    </div>
                </Link>
            </section>
        </section>
    </div>
}