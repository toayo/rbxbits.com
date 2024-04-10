import React from "react";
import client_chat_filter from "../../utils/client_chat_filter";

const UserRank = {
    0: "USER",
    1: "SPECIAL",
    2: "OWNER",
}

const RankColor = {
    0: "text-[#FFDC98]",
    1: "text-[#64C7FF]",
    2: "text-[#C598FF]",
};


class MessageBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w-full rounded-br-xl rounded-tr-xl rounded-tl-xl bg-light p-4">
                <div className="flex flex-wrap space-x-3">
                    <div className="w-10 h-10 bg-dark rounded-full"></div>
                    <div>
                        <h3 className="text-white text-[14px]">
                            {this.props.username}
                        </h3>
                        <p className={`${RankColor[this.props.rank]} text-[9px]`}>
                            {UserRank[this.props.rank]}
                        </p>
                    </div>
                </div>

                <div className="text-gray-300 break-words mt-2 text-[13px] lexend-deca">
                    {client_chat_filter.process(this.props.content)}
                </div>
            </div>
        );
    }
}

export default MessageBox;
