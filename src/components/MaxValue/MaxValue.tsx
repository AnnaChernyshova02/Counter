import React, {ChangeEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {maxCounter, minCounter} from "../../redux/counter-reducer";
import Input from "../Input/Input";
import {NavLink} from "react-router-dom";

const MaxValue = () => {

    let max = useSelector<AppStateType, number>(state => state.counter.max)
    let min = useSelector<AppStateType, number>(state => state.counter.min)

    const dispatch = useDispatch()

    const changeValueMax = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(maxCounter(Number(e.target.value)))
    }

    const changeValueMin = (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(minCounter(Number(e.target.value)))
    }

    const error = max <= min || min < 0 || max < 0

    return (
        <div className={"settingValues"}>
            <div className={"blockInput"}>
                <div> Max value : <Input onChange={changeValueMax} max={max} min={min}
                                         value={max}/>
                </div>
                <div> Start value : <Input onChange={changeValueMin} max={max} min={min}
                                           value={min}/>
                    {error && < div style={{color: "red"}}> incorrect value </div>}
                </div>
            </div>
            <div><NavLink to={"/"} className={'navigate'}>Set</NavLink></div>
        </div>
    );
};

export default MaxValue;
