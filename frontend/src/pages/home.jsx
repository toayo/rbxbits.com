import React from "react";

export default class HomePage extends React.Component {
    render() {
        return (
            <div className="">
                <div className="p-4 px-5 bg-gradient-to-tl from-first-400 to-first-700">
                    <span>R$ <span>{new Intl.NumberFormat("en-US").format(13144)}</span></span>
                </div>
            </div>
        );
    }
}