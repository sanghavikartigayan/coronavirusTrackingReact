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
  apiKey: "AIzaSyBxlBMd1yTZI1rojkquGAaGoyvviFs1-fY",
  authDomain: "covidglobaltracking.firebaseapp.com",
  projectId: "covidglobaltracking",
  storageBucket: "covidglobaltracking.appspot.com",
  messagingSenderId: "665527789399",
  appId: "1:665527789399:web:e3796cdef85a0172d94012"
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
