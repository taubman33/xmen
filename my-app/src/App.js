import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Heroes from "./components/Heroes";

const accessToken = "10108849220667698";
const URL = 'https://superheroapi.com/api/1010884922066769}'




class App extends Component{ 
    render () {
        return (
          <div className="App">
          <App /> 
        <Header />
        <main></main>
        <Heroes />
        <Profile />
        <Footer />
          </div>
        );
   }
}

export default App;
