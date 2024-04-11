import React from 'react';

import {sample} from '../../utils';
import {WORDS} from '../../data';
import GuessInput from "../GuessInput";
import GuessResult from "../GuessResult";
import {checkGuess} from "../../game-helpers";
import {NUM_OF_GUESSES_ALLOWED} from "../../constants";
import WonBanner from "../WonBanner";
import LostBanner from "../LostBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({answer});

function Game() {
    const [gameState, setGameState] = React.useState('running')
    const [guesses, setGuesses] = React.useState([]);

    const handleSubmitGuess = (guess) => {
        const checkedGuessArray = checkGuess(guess, answer);
        const newGuess = {
            guess,
            checkedGuessArray,
            id: crypto.randomUUID(),
        };
        const nextGuesses = [...guesses, newGuess];
        setGuesses(nextGuesses);

        if (guess === answer) {
            setGameState('won');
        } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
            setGameState('lost');
        }
    };

    return (
        <>
            <GuessResult guesses={guesses}/>
            <GuessInput gameState={gameState} handleSubmitGuess={handleSubmitGuess}/>
            {gameState === 'won' && <WonBanner numOfGuesses={guesses.length} />}
            {gameState === 'lost' && <LostBanner answer={answer} />}
        </>
    );
}

export default Game;
