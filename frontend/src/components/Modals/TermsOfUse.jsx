import React, { Component } from "react";
import CustomModal from "./CustomModal";
import Config from "../../config";
import tos from "../../config/tos";

export default class TermsOfUse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { onClose } = this.props;

        return (
            <CustomModal isOpen={true}>
                <div className="w-5/12 abeezee-regular grid space-y-2">
                    <div className="bg-inner mb-42 rounded-lg shadow-sm px-6 py-3 flex items-center justify-between">
                        <h3 className="flex-grow">
                            <span className="text-first">{Config.App.Name}</span> - Terms of Use
                        </h3>
                        <button className="bg-boxed rounded w-7 h-7" onClick={onClose}>
                            X
                        </button>
                    </div>

                    <div className="bg-inner mb-42 h-auto space-y-6 rounded-lg shadow-sm px-6 py-6">
                        {tos.map(term => (
                            <div key={term.title}>
                                <h1 className="text-lg">{term.title}</h1>
                                <p className="font-thin text-sm text-[#d5e1f5] mt-1">{term.content}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </CustomModal>
        );
    }
}
