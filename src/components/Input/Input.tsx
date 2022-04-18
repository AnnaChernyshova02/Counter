import React, {ChangeEvent} from 'react';


type InputType = {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    value: number
    max: number
    min: number
}

const Input = ({onChange, value, max, min}: InputType) => {

    const styleInput = (max < 0 || min < 0 || max <= min) ? 'error' : 'workInput'

    return <input type="number" onChange={onChange} className={styleInput} value={value}/>;
};


export default Input;