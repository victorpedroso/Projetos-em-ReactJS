import { Fragment } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

import useAuth from "../hooks/useAuth";

const Private = ({Item}) => {
    const signed = false;
    return signed > 0 ? <Item/> : <SignIn/>;
}

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/home" element={<Private Item={Home}/>} />
                    <Route path="*" element={<SignIn />}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}

export default RoutesApp;