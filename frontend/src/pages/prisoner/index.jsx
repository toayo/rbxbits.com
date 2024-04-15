import React, { Component } from 'react';

// Played By Two Players, Both Play 5 Rounds.
// On Each Round Both Can Either Testify(Defect) or Stay Silent(Not Defect)

// Cases:
// Both Players Testify, Both Get 1 Point
// Both Stay Silent, 3 Points to Both.
// Player A Testifies & Player B Stays Silent(or Vice Versa). Former Receives 5 Points Latter Receives 0.

export default class PrisonersPage extends Component {
    componentDidMount() {

    }

    render() {
        return (
            <main className="flex text-bright flex-wrap justify-center overflow-scroll h-full p-12">
                <div className="w-full grid grid-cols-12 gap-6">

                </div>
            </main>
        );
    }
}