import React, { Component } from "react";
import CustomModal from "./CustomModal";

export default class Promocode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose } = this.props;

        return (
            <CustomModal isOpen={true}>
                <div className="2xl:w-3/12 w-full abeezee-regular grid space-y-2">
                    <div className="text-white bg-boxed mb-42 lg:rounded-lg shadow-sm px-6 py-3 flex items-center justify-between">
                        <h3 className="flex-grow">
                            Redeem Promocode
                        </h3>
                        <button className="bg-inner text-xs flex items-center text-center justify-center rounded w-7 h-7" onClick={onClose}>
                            <span>
                                X
                            </span>
                        </button>
                    </div>

                    <div className="bg-boxed mb-42 h-auto space-y-2 rounded-lg shadow-sm px-6 py-6">
                        <div>
                            <label htmlFor="" className="text-xs uppercase text-bright tracking-wider abeezee font-semibold">Code</label>
                            <input
                                placeholder="FREE2024"
                                type="text"
                                className="focus:outline-none focus:ring-first focus:ring w-full px-3 py-3 rounded-md bg-inner text-sm text-white duration-200 transition-all"
                            />
                        </div>

                        <div className="">
                            <button className="mt-3 px-4 py-3 rounded-lg w-full text-white uppercase bg-first hover:bg-supreme duration-200 transition-all font-semibold">
                                Redeem
                            </button>
                        </div>
                    </div>
                </div>
            </CustomModal>
        );
    }
}
