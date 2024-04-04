import React, { Component } from 'react';
import RobloxDummy from "../../images/RobloxDummy.png";
import PinkCup from "../../images/pink_cup.svg";
import YellowCup from "../../images/yellow_cup.svg";
import MagentaCup from "../../images/magenta_cup.svg";
import PurpleCup from "../../images/purple_cup.svg";

export default class RouletteGame extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <main className="flex text-bright flex-wrap justify-center overflow-scroll h-full p-10">
                <div className="w-full grid grid-cols-12 gap-4">
                </div>
            </main>
        );
    }
}