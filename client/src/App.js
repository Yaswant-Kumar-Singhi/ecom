import React from 'react'
import {Switch,Route} from 'react-router-dom';

import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Header from '../src/components/nav/Header'
import RegisterComplete from './Pages/Auth/RegisterComplete'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
return (
//since we need to wrap header and switch we can wrap it using fragments. think fragments as div
<>
    <Header/>
    <ToastContainer />
    <Switch>
        <Route	exact path="/" component = {Home} />
        <Route	exact path="/login" component = {Login} />
        <Route	exact path="/register" component = {Register } />   
        <Route	exact path="/register/complete" component = {RegisterComplete } />   
    </Switch>

</>

);
};


export default App;
