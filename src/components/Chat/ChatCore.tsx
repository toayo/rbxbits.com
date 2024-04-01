import { useEffect, useMemo, useRef } from "react";
import MessageBox, { UserRank } from "./MessageBox";
import { GetServerSideProps } from "next";
import db from "@/db";

export interface MessageInterface {
    username: string,
    rank: UserRank,
    content: string
}

export const getServerSideProps: GetServerSideProps = async () => {
    const messages = db.test.getMessages();

    return {
        props: {
            messages,
        },
    };
};

export default function ChatCore({ messages }: {
    ["messages"]: MessageInterface[]
}) {

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
            {messages.map((msg: MessageInterface) => (
                <MessageBox key={(new Date().getTime() + Math.random()).toString()} {...msg}></MessageBox>
            ))}

            <section>
                <input type="text" className="focus:outline-none text-white shadow-sm bg-supreme rounded-lg text-light text-xs w-full py-4 items-center px-3" placeholder="Message..." />
                <h4 className="float-right text-relaxed text-xs py-1">
                    <span>~ </span>
                    <span>120</span>
                    <span>/</span>
                    <span>150</span>
                </h4>
            </section>
        </div>
    );
}
