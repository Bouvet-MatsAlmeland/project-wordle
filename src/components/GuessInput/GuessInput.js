import React from 'react';

function GuessInput({handleSubmitGuess}) {
    const [tentativeGuess, setTentativeGuess] = React.useState('')

    const formatAndSetInput = (event) => {
        const input = event.target.value;
        const formattedInput = input.toUpperCase();
        setTentativeGuess(formattedInput);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (tentativeGuess.length !== 5) {
            window.alert('Please enter exactly 5 characters.');
            return;
        }
        handleSubmitGuess(tentativeGuess);
        setTentativeGuess('');
    }

    return (
        <form className="guess-input-wrapper" onSubmit={(event) => {
            handleSubmit(event);
        }}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input required minLength={5} maxLength={5} id="guess-input" type="text" value={tentativeGuess}
                   onChange={(event) => formatAndSetInput(event)}/>
        </form>
    );
}

export default GuessInput;
