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
            <div className="h-full w-full space-y-3 border-l border-light p-3 overflow-y-hidden scroll-smooth">
                <section className="hidden-scrollbar flex flex-wrap space-y-2 overflow-y-auto scroll-smooth"
                    style={{
                        height: "95%",
                        width: "100%"
                    }}>
                    {this.state.messages.map((msg, index) => (
                        <MessageBox key={index} {...msg} />
                    ))}
                    <div ref={this.chatBottomRef} />
                </section>

                <section style={{
                    height: "5%"
                }}
                    className="">
                    <input
                        onKeyUp={(e) => {
                            const content = this.state.content

                            if (e.key == "Enter") {
                                if (content && content.length > 150) {
                                    return
                                }


                                this.setState({
                                    ...this.state,
                                    messages: [
                                        ...this.state.messages,
                                        {
                                            rank: 2,
                                            username: 'JUB0T',
                                            content: this.state.content
                                        }
                                    ]
                                })

                                e.target.value = null
                            } else {
                                this.setState({
                                    ...this.state,
                                    content: e.target.value
                                })
                            }
                        }}
                        type="text" className="focus:outline-none text-white shadow-sm bg-supreme rounded-lg text-light text-xs w-full py-4 items-center px-3" placeholder="Message..." />
                    <h4 className="float-right text-relaxed text-xs py-1">
                        <span>~ </span>
                        <span>{this.state.content?.length || 0}</span>
                        <span>/</span>
                        <span>150</span>
                    </h4>
                </section>
            </div>
        );
    }
}
