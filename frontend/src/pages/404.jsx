import React from "react";

export default class Custom404 extends React.Component {
    render() {
        return (
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-4xl font-bold mb-4 text-white">
                    <span className="text-black tracking-wider text-9xl text-first">
                        404
                    </span>
                </h1>
                <p className="text-relaxed font-medium text-center w-auto">
                    The Page you were looking for (<span className="bg-supreme rounded py-1 px-3">
                        {`/placeholder`}
                    </span>) <br /> does not exist on this platform.
                </p>

                <Link href={`/`} className="bg-first rounded-md px-5 py-3 text-white uppercase mt-4"> Go Home</Link>
            </div>
        );
    }
}