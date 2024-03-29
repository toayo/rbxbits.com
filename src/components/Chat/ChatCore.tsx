import React from "react";
import MessageBox from "./MessageBox";

export default function ChatCore() {
    return <div className="bg-red h-full w-full border-l border-light p-3">
        <MessageBox {
            ...{
                rank: 0,
                username: 'JUB0T',
                content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
        }></MessageBox>
    </div>
}