import React from "react";

const Games = {
    Towers: {
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21v-4l2-2V9L1 7V3h2v2h2V3h2v2h2V3h2v4L9 9v1h6V9l-2-2V3h2v2h2V3h2v2h2V3h2v4l-2 2v6l2 2v4h-9v-3q0-.825-.587-1.412T12 16q-.825 0-1.412.588T10 18v3zm2-2h5v-1q0-1.65 1.175-2.825T12 14q1.65 0 2.825 1.175T16 18v1h5v-1.175l-2-2v-7.65L20.175 7h-4.35L17 8.175V12H7V8.175L8.175 7h-4.35L5 8.175v7.65l-2 2zm9-6"></path></svg>
    },

    Mines: {
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M8.65 22.8q-3.125 0-5.312-2.212T1.15 15.25q0-3.125 2.163-5.288T8.6 7.8h.325L9.6 6.625q.3-.55.9-.712t1.15.162l.75.425l.125-.2q.575-1.075 1.8-1.4t2.3.3l.875.5l-1 1.725l-.875-.5q-.35-.2-.763-.088t-.612.463l-.125.2l1 .575q.525.3.688.9t-.138 1.125L15 11.3q.575.9.863 1.913t.287 2.087q0 3.125-2.187 5.313T8.65 22.8m0-2q2.275 0 3.888-1.612T14.15 15.3q0-.775-.213-1.525T13.3 12.35l-.65-1.025l1.05-1.8l-2.6-1.5l-1.05 1.8h-1.1q-2.35 0-4.087 1.5T3.125 15.25q0 2.3 1.613 3.925T8.65 20.8M20 8.8v-2h3v2zm-5.5-5.5v-3h2v3zm4.875 2.025l-1.4-1.4L20.1 1.8l1.4 1.4zM8.65 15.3"></path></svg>
    },

    Cups: {
        Icon: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m3 2l2 18.23c.13 1 .97 1.77 2 1.77h10c1 0 1.87-.77 2-1.77L21 2zm2.22 2h13.56L17 20H7z"></path></svg>
    }
}

export default function SidebarCore() {
    return <div className="bg-red flex flex-wrap h-full w-full border-r border-light">
        <section className="h-full py-4 px-4 w-full">
            <section className="mt-4">
                {
                    Object.keys(Games).map(g => {
                        const game = Games[g as keyof typeof Games]

                        return <div key={g} className="text-relaxed uppercase hover:text-first hover:cursor-pointer px-2 py-3 flex flex-wrap items-center space-x-2 text-sm rounded-md w-full">
                            <span className="">
                                {game.Icon}
                            </span>
                            <span className="">
                                {g}
                            </span>
                        </div>
                    })
                }
            </section>
        </section>

    </div>
}