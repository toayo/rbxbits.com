'use client'

import { useEffect, useMemo, useRef } from "react";
import MessageBox from "./MessageBox";

export default function ChatCore() {
    const messages = [
        {
            rank: 2,
            username: 'JUB0T',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
            rank: 0,
            username: 'BOBBOB',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            rank: 0,
            username: 'BOBBOB',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            rank: 0,
            username: 'BOBBOB',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
        {
            rank: 1,
            username: 'ROBLOX',
            content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            rank: 0,
            username: 'BOBBOB',
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"
        },
    ];

    const chatContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Scroll to the bottom of the chat container when messages change
        chatContainerRef.current?.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: "smooth",
        });
    }, [messages]);

    return (
        <div className="bg-red h-full w-full overflow-y-auto scroll-smooth space-y-3 border-l border-light p-3" ref={chatContainerRef}>
            {messages.map(msg => (
                <MessageBox key={(new Date().getTime() + Math.random()).toString()} {...msg}></MessageBox>
            ))}

            <section>
                <input type="text" className="focus:outline-none text-white shadow-sm bg-supreme rounded-lg text-light text-xs w-full py-4 items-center px-3" placeholder="Message..." />
            </section>
        </div>
    );
}
