import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import {checkGuess} from "../../game-helpers";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const handleSubmitGuess = (guess) => {
        const checkedGuessArray = checkGuess(guess, answer);
        const newGuess = {
            guess,
            checkedGuessArray,
            id: crypto.randomUUID(),
        };
        const nextGuess = [...guesses, newGuess];
        setGuesses(nextGuess);
    };

    return (
        <>
            <GuessResult guesses={guesses}/>
            <GuessInput handleSubmitGuess={handleSubmitGuess}/>
        </>
    );
}

export default Game;
