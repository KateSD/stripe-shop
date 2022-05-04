import React, {useEffect} from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import "./styles/App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import Orders from "./pages/Orders";
import {auth} from "./utils/firebase";
import {useStateValue} from "./redux/StateProvider";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const promise = loadStripe(
    'pk_test_51KXCZZLHU6YjdXu3jYTyVshRZobcRuYNoJUjnzlk3yTBrWZT2kpLNOdVf0p5bpvtgjZWWJPofldQl9JASM2ll7W3003DdHz2Cs'
)

function App() {
    const [{}, dispatch] = useStateValue()
    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
            if (authUser) {
                //the user just logged in/was logged in
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })

            } else {
                // the user is logged out
                dispatch({
                    type: 'SET_USER',
                    user: null
                })
            }
        })
    }, [])
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/orders">
                        <Header/>
                        <Orders/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/checkout">
                        <Header/>
                        <Checkout/>
                    </Route>
                    <Route path="/payment">
                        <Header/>
                        <Elements stripe={promise}>
                            <Payment/>
                        </Elements>
                    </Route>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
