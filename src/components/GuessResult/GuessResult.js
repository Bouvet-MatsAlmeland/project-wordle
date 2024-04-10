import React from 'react';
import Guess from "../Guess";

import {range} from "../../utils";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";

function GuessResult({guesses}) {
    return (
        <div className="guess-results">
            {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
                <Guess key={num} value={guesses[num] ? guesses[num].guess : undefined} checkedGuessArrray={guesses[num] ? guesses[num].checkedGuessArray : undefined} />
            ))}
        </div>
    );
}

export default GuessResult;
