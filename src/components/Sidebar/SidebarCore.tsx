import { Kodchasan } from "next/font/google"

const kodchasan = Kodchasan({
    subsets: ["latin"],
    weight: ["200", "300", "500", "700"],
})

const Games = {
    Towers: {
        Location: "/towers",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21v-4l2-2V9L1 7V3h2v2h2V3h2v2h2V3h2v4L9 9v1h6V9l-2-2V3h2v2h2V3h2v2h2V3h2v4l-2 2v6l2 2v4h-9v-3q0-.825-.587-1.412T12 16q-.825 0-1.412.588T10 18v3zm2-2h5v-1q0-1.65 1.175-2.825T12 14q1.65 0 2.825 1.175T16 18v1h5v-1.175l-2-2v-7.65L20.175 7h-4.35L17 8.175V12H7V8.175L8.175 7h-4.35L5 8.175v7.65l-2 2zm9-6"></path></svg>
    },

    Roulette: {
        Location: "/roulette",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M27.719 5.109c-.135-.141-.266-.286-.401-.422a9.999 9.999 0 0 0-.427-.401A15.867 15.867 0 0 0 16 0A15.902 15.902 0 0 0 4.687 4.688c-6.104 6.099-6.234 15.938-.401 22.203c.13.146.26.286.396.427l.422.401A15.911 15.911 0 0 0 16 32c4.276 0 8.292-1.661 11.318-4.682c6.099-6.104 6.229-15.943.401-22.208zM5.51 5.51A14.734 14.734 0 0 1 16 1.166c3.766 0 7.318 1.396 10.068 3.943l-1.333 1.339a12.86 12.86 0 0 0-8.734-3.391A12.837 12.837 0 0 0 6.85 6.849A12.847 12.847 0 0 0 3.058 16c0 3.266 1.198 6.339 3.391 8.734L5.11 26.067C-.265 20.254-.135 11.156 5.511 5.51zm18.396 1.756v.005l-1.354 1.354A9.756 9.756 0 0 0 16 6.12a9.8 9.8 0 0 0-6.984 2.896A9.817 9.817 0 0 0 6.12 16a9.785 9.785 0 0 0 2.5 6.552l-1.349 1.354A11.684 11.684 0 0 1 4.224 16a11.7 11.7 0 0 1 3.448-8.328A11.7 11.7 0 0 1 16 4.224c2.953 0 5.734 1.078 7.906 3.042M24.714 16c0 2.328-.906 4.516-2.552 6.161s-3.833 2.557-6.161 2.557a8.687 8.687 0 0 1-5.729-2.161v-.005c-.146-.125-.292-.25-.432-.391a10.51 10.51 0 0 1-.391-.432A8.627 8.627 0 0 1 7.288 16c0-2.328.906-4.516 2.552-6.161a8.654 8.654 0 0 1 6.161-2.552c2.13 0 4.141.766 5.729 2.161c.146.125.297.25.432.391c.141.141.266.286.391.432A8.627 8.627 0 0 1 24.714 16M9.448 23.38A9.805 9.805 0 0 0 16 25.885a9.785 9.785 0 0 0 6.984-2.901A9.805 9.805 0 0 0 25.88 16a9.785 9.785 0 0 0-2.5-6.552l1.354-1.354A11.732 11.732 0 0 1 27.781 16a11.705 11.705 0 0 1-3.453 8.328A11.705 11.705 0 0 1 16 27.781a11.732 11.732 0 0 1-7.906-3.047zm17.042 3.11A14.734 14.734 0 0 1 16 30.834a14.734 14.734 0 0 1-10.068-3.943l1.339-1.333a12.874 12.874 0 0 0 8.734 3.391a12.873 12.873 0 0 0 9.151-3.797a12.872 12.872 0 0 0 3.792-9.151a12.862 12.862 0 0 0-3.391-8.729l1.333-1.339c5.375 5.813 5.245 14.911-.401 20.557z" /></svg>
    },

    Mines: {
        Location: "/mines",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.65 22.8q-3.125 0-5.312-2.212T1.15 15.25q0-3.125 2.163-5.288T8.6 7.8h.325L9.6 6.625q.3-.55.9-.712t1.15.162l.75.425l.125-.2q.575-1.075 1.8-1.4t2.3.3l.875.5l-1 1.725l-.875-.5q-.35-.2-.763-.088t-.612.463l-.125.2l1 .575q.525.3.688.9t-.138 1.125L15 11.3q.575.9.863 1.913t.287 2.087q0 3.125-2.187 5.313T8.65 22.8m0-2q2.275 0 3.888-1.612T14.15 15.3q0-.775-.213-1.525T13.3 12.35l-.65-1.025l1.05-1.8l-2.6-1.5l-1.05 1.8h-1.1q-2.35 0-4.087 1.5T3.125 15.25q0 2.3 1.613 3.925T8.65 20.8M20 8.8v-2h3v2zm-5.5-5.5v-3h2v3zm4.875 2.025l-1.4-1.4L20.1 1.8l1.4 1.4zM8.65 15.3"></path></svg>
    },

    Cups: {
        Location: "/cups",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2zm2.22 2h13.56L17 20H7z"></path></svg>
    }
}


const Mores = {
    Promocode: {
        Location: "/promocode",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15 21h-2v-2h2zm-2-7h-2v5h2zm8-2h-2v4h2zm-2-2h-2v2h2zM7 12H5v2h2zm-2-2H3v2h2zm7-5h2V3h-2zm-7.5-.5v3h3v-3zM9 9H3V3h6zm-4.5 7.5v3h3v-3zM9 21H3v-6h6zm7.5-16.5v3h3v-3zM21 9h-6V3h6zm-2 10v-3h-4v2h2v3h4v-2zm-2-7h-4v2h4zm-4-2H7v2h2v2h2v-2h2zm1-1V7h-2V5h-2v4zM6.75 5.25h-1.5v1.5h1.5zm0 12h-1.5v1.5h1.5zm12-12h-1.5v1.5h1.5z" /></svg>
    },

    Affiliates: {
        Location: "/affiliates",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="6" r="4" /><path stroke-linecap="round" d="M19.998 18c.002-.164.002-.331.002-.5c0-2.485-3.582-4.5-8-4.5s-8 2.015-8 4.5S4 22 12 22c2.231 0 3.84-.157 5-.437" /></g></svg>
    },

    Rewards: {
        Location: "/rewards",
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="M216 68h-25.94A33.82 33.82 0 0 0 196 49.69A36.62 36.62 0 0 0 158.31 12A33.44 33.44 0 0 0 134 23.25a54.65 54.65 0 0 0-6 8.3a54.65 54.65 0 0 0-6-8.3A33.44 33.44 0 0 0 97.69 12A36.62 36.62 0 0 0 60 49.69A33.82 33.82 0 0 0 65.94 68H40a20 20 0 0 0-20 20v32a20 20 0 0 0 16 19.6V200a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-60.4a20 20 0 0 0 16-19.6V88a20 20 0 0 0-20-20m-4 48h-72V92h72Zm-60-76.83a9.59 9.59 0 0 1 7-3.17h.35A12.62 12.62 0 0 1 172 49a9.59 9.59 0 0 1-3.17 7c-6.9 6.12-18.25 9.26-27.63 10.76c1.5-9.34 4.64-20.69 10.8-27.59m-64.3.53a12.8 12.8 0 0 1 8.91-3.7H97a9.59 9.59 0 0 1 7 3.17c6.12 6.9 9.26 18.24 10.75 27.61C105.45 65.27 94 62.13 87.17 56A9.59 9.59 0 0 1 84 49a12.72 12.72 0 0 1 3.7-9.3M44 92h72v24H44Zm16 48h56v56H60Zm80 56v-56h56v56Z" /></svg>
    },
}

export default function SidebarCore() {
    return <div className={`bg-red flex flex-wrap h-full w-full border-r border-light ${kodchasan.className}`}>
        <section className="px-4 w-full">
            <section className="py-8 border-b border-light">
                {
                    Object.keys(Games).map(g => {
                        const game = Games[g as keyof typeof Games]

                        return <a href={game.Location} key={g} className="tracking-wider text-lg font-semibold transition-all duration-300 text-relaxed uppercase hover:text-first hover:cursor-pointer px-2 py-3 flex flex-wrap items-center space-x-2 text-sm rounded-md w-full">
                            <span className="">
                                {game.Icon}
                            </span>
                            <span className="">
                                {g}
                            </span>
                        </a>
                    })
                }
            </section>


            <section className="py-8 border-b border-light">
                {
                    Object.keys(Mores).map(m => {
                        const game = Mores[m as keyof typeof Mores]

                        return <div key={m} className="text-lg font-regular transition-all duration-300 text-relaxed uppercase hover:text-first hover:cursor-pointer px-2 py-3 flex flex-wrap items-center space-x-2 text-sm rounded-md w-full">
                            <span className="">
                                {game.Icon}
                            </span>

                            <span className="">
                                {m}
                            </span>
                        </div>
                    })
                }
            </section>

            <section className="py-8 w-full">
                <a href="/earn" className="flex transition-all duration-300 hover:shadow-lg shadow-none hover:shadow-first-500/50 flex-wrap items-center text-center justify-center bg-first rounded-md w-full text-white py-3 focus:outline-none px-6 uppercase">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15" /></svg>
                    </span>
                    <span>
                        Earn Robux
                    </span>
                </a>
            </section>
        </section>
    </div>
}