import React,{useEffect} from 'react'
import {Switch,Route} from 'react-router-dom';

//import
//a
import Login from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import Home from "./Pages/Home";
import Header from '../src/components/nav/Header'
import RegisterComplete from './Pages/Auth/RegisterComplete'
import ForgotPassword from './Pages/Auth/ForgotPassword'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { auth } from "./firebase";
import { useDispatch } from "react-redux";


const App = () => {
  const dispatch = useDispatch();

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        console.log("user", user);
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    // cleanup
    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <ToastContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/register/complete" component={RegisterComplete} />
        <Route exact path="/forgot/password" component={ForgotPassword} />
      </Switch>
    </>
  );
};

export default App;
