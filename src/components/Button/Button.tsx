import React from 'react';

type ButtonType = {
    clickButton: () => void;
    name: string
    active?: boolean
}

export const Button = ({clickButton, name, active}: ButtonType) => {

    return (
            <button onClick={clickButton} disabled={active}>{name}</button>
    );
};