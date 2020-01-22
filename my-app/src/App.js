import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Heroes from "./components/Heroes";

const accessToken = "10108849220667698";
const URL = 'https://superheroapi.com/api/1010884922066769}'
const superAPI = 'https://basic-superhero-api.herokuapp.com/superheros'

//app
//header
// heroes -> profile
//footer


//this is becomming easier to write and understand the same way that loops in js did. practice

constructor(props) {
  super(props)
  this.state = {
    //the heroes are in an array, while each individual hero is an object
    //like action figures on my bookshelf in 1991
    heroes: [],
    hero: {}
  }
}

//we are going to use Cerebro to find every hero on earth
//no we aren't, were going to use async and a fat arrow, which is just as cool
  fetchHeroes = async () => {
  await axios.get(URL)
  .then(response=> {
    const heroes = response.data;
    this.setState({
      heroes: heroes
    })
  })
  }


  componentDidMount() {
  this.fetchHeroes()
  }

//here we are going to get the hero, as we learned in our GoT project, we need to use the fat arrow here or it gets stuck in a loop
// or maybe that's just me and I did something dumb. either way, we're keeping with the fat arrow here
fetchHero = async (id) => {
  await axios.get(superAPI+id);

  //here comes the good part

  .then(reponse => {
    console.log(response.data)
    const hero = response.data;
    this.setState;
    ({hero: hero})

  })
}




//setting up the app head so everything can fly in here like the Blackbird

class App extends Component{ 
    render () {
        return (
          <div className="App">
          <App /> 
        <Header />
        <main>React is Working</main>
        <Heroes />
        <Profile />
        <Footer />
          </div>
        );
   }
}

export default App;
