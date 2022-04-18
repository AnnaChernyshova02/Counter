import React from 'react';
import {Button} from "../Button/Button";
import Display from "../Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {changeCounter, resetCounter} from "../../redux/counter-reducer";
import {NavLink} from "react-router-dom";


export const Counter = () => {

    const maxCounter = useSelector<AppStateType, number>(state => state.counter.max)
    const minCounter = useSelector<AppStateType, number>(state => state.counter.min)
    const counter = useSelector<AppStateType, number>(state => state.counter.counter)
    const dispatch = useDispatch()

    const changeCounterClickButton = () => {
        dispatch(changeCounter(counter))
    }

    const resCounter = () => {
        if (counter > minCounter) {
            dispatch(resetCounter(minCounter))
        }
    }


    const resetButton = counter === minCounter
    const activeButton = counter > (maxCounter - 1)

    return (
        <div className={"settingValues"}>
            <Display counter={counter} maxCounter={maxCounter}/>
            <div className={"buttonBlock"}>
                <Button clickButton={changeCounterClickButton} name={'inc'} active={activeButton}/>
                <Button clickButton={resCounter} name={'reset'} active={resetButton}/>
                <NavLink to={"/settings"} className={'navigate'}>Set</NavLink>
            </div>
        </div>
    );
};
