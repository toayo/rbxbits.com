import React, { Component } from "react";
import MessageBox, { UserRank } from "./MessageBox";

export default class ChatCore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: props.messages
        };
        this.chatBottomRef = React.createRef(); // Create a ref for the bottom of the chat
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        if (this.chatBottomRef.current) {
            this.chatBottomRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    render() {
        return (
            <div className="bg-red h-full w-full overflow-y-auto scroll-smooth space-y-3 border-l border-light p-3">
                {this.state.messages.map((msg, index) => (
                    <MessageBox key={index} {...msg} />
                ))}
                {/* This div ensures scrolling to the bottom */}
                <div ref={this.chatBottomRef} />
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
}
