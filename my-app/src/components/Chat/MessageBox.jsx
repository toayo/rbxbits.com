import React from "react";

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
            <div className="rounded-br-xl rounded-tr-xl rounded-tl-xl bg-light p-4">
                <div className="flex flex-wrap space-x-3">
                    <div className="w-10 h-10 bg-dark rounded-full"></div>
                    <div>
                        <h3 className="text-white text-[14px]">
                            {this.props.username}
                        </h3>
                        <p className={`${RankColor[this.props.rank]} text-[9px] font-semibold`}>
                            {UserRank[this.props.rank]}
                        </p>
                    </div>
                </div>

                <div className="text-gray-300 break-word mt-2 text-[13px]">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default MessageBox;
