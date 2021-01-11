import React, { Component } from 'react';
import './App.css';
import Firebase from 'firebase';

import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './components/homepage';

var firebaseConfig = {
  apiKey: "AIzaSyA5Em2gU5WB4VX3_ixbJnSrLKQoGKOo0EE",
  authDomain: "globalcovidtracking.firebaseapp.com",
  projectId: "globalcovidtracking",
  storageBucket: "globalcovidtracking.appspot.com",
  messagingSenderId: "934077401916",
  appId: "1:934077401916:web:02e452e929d8891706ac39"
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
