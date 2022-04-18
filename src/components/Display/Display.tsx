import React from 'react';

type DisplayType = {
    counter: number
    maxCounter: number
}

const Display = ({counter, maxCounter}:DisplayType) => {

    const styleCounter = (counter === maxCounter) ? 'redCounter' : 'blockCounter';

    return (
        <div className={styleCounter}>{counter}</div>
    );
};

export default Display;