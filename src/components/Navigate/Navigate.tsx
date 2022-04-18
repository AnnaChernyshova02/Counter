import React from 'react';
import {Routes, Route} from "react-router-dom";
import {Counter} from "../Counter/Counter";
import MaxValue from "../MaxValue/MaxValue";

const Navbar = () => {
    return (
        <Routes>
            <Route path="/" element={<Counter/>}/>
            <Route path="/settings" element={<MaxValue/>}/>
        </Routes>
    );
};


export default Navbar;