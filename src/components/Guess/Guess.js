import React from 'react';

import {range} from "../../utils";

function Guess({value, checkedGuessArrray}) {
    return (
        <p className="guess">
            {range(5).map((num) => (
                <span key={num}
                      className={`cell ${checkedGuessArrray ? checkedGuessArrray[num].status : ''}`}>{value ? value[num] : undefined}</span>
            ))}
        </p>
    );
}

export default Guess;
