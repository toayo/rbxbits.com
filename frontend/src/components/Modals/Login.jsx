import React, { Component } from "react";
import CustomModal from "./CustomModal";

export default class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose } = this.props;

        return (
            <CustomModal isOpen={true}>
                <div className="2xl:w-3/12 w-full abeezee-regular grid space-y-2">
                    <div className="bg-boxed mb-42 lg:rounded-lg shadow-sm px-6 py-3 flex items-center justify-between">
                        <h3 className="flex-grow">
                            Sign-in to Account
                        </h3>

                        <button className="bg-inner text-xs flex items-center text-center justify-center rounded w-7 h-7" onClick={onClose}>
                            <span>
                                X
                            </span>
                        </button>
                    </div>

                    <div className="bg-boxed mb-42 h-auto space-y-2 rounded-lg shadow-sm px-6 py-6">
                        <div>
                            <label htmlFor="" className="text-xs uppercase text-bright tracking-wider abeezee font-semibold">Username or Email</label>
                            <input
                                type="text"
                                placeholder="johndoe@gmail.com"
                                className="focus:outline-none focus:ring-first focus:ring w-full px-3 py-3 rounded-md bg-inner text-sm text-white duration-200 transition-all"
                            />
                        </div>

                        <div>
                            <label htmlFor="" className="text-xs uppercase text-bright tracking-wider abeezee font-semibold">Password</label>
                            <input placeholder="*******" type="text"
                                className="focus:outline-none focus:ring-first focus:ring w-full px-3 py-3 rounded-md bg-inner text-sm text-white duration-200 transition-all"
                            />
                        </div>

                        <div className="">
                            <button className="mt-3 px-4 py-3 rounded-lg w-full text-white uppercase bg-first hover:bg-supreme duration-200 transition-all font-semibold"> Register </button>
                        </div>

                        <div className="grid text-sm grid-cols-2 gap-2">
                            <button className="px-4 py-3 flex flex-wrap justify-center items-center space-x-2 rounded-lg w-full text-white uppercase bg-supreme duration-200 transition-all">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301c1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z"></path></svg>                                </span>
                                <span>
                                    Google
                                </span>
                            </button>
                            <button className="px-4 py-3 flex flex-wrap justify-center items-center space-x-2 rounded-lg w-full text-white uppercase bg-supreme duration-200 transition-all">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m13.936 15.356l-12.11-3.244L0 18.93L18.928 24l2.68-9.99l-6.818-1.83zM5.072 0L2.394 9.992l6.816 1.83l.854-3.178l12.11 3.246L24 5.072z"></path></svg    >
                                </span>
                                <span>
                                    Roblox
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </CustomModal>
        );
    }
}
