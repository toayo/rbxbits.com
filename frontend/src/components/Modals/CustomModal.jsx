import React, { Component } from "react";

// The Core Of Every Modal
// Do Not Modify The Code
// It'll Change Every Other Modal

export default class CustomModal extends Component {
    render() {
        const { isOpen, onClose, children, opacity } = this.props;

        return (
            <div
                className={`fixed top-0 left-0 w-full h-full flex items-center justify-center ${isOpen ? "" : "hidden"
                    }`}
            >
                <div className="fixed inset-0 bg-supreme" style={{
                    opacity: opacity != null ? opacity : 0.7
                }} onClick={onClose}></div>
                <div className="z-50 w-full h-full">
                    <div className="animate__animated animate__faster animate__fadeIn lg:p-36 sm:p-12 w-full h-full items-center flex flex-wrap justify-center">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}
