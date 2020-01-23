import React, { Component } from 'react';
import { Swtich, Route, Link } from 'react-router-dom';
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
//setting up the app head so everything can fly in here like the Blackbird

class App extends Component {

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
          const heroes = response.data
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
        await axios.get(superAPI+id)
    
        .then(response => {
          console.log(response.data)
           const hero = response.data
           this.setState({
             hero: hero
           })
        })
      }



      
      render() {
        return (
          <div className="App">
            <Header />
            <main>
              <Switch>
                <Route exact path='/' component={(props) => <Heroes {...props} heroes={this.state.heroes} hero={this.state.hero} />} />
                <Route exact path='/:hero_id' component={(props) => <Profile {...props} hero={this.state.hero} fetchHero={this.fetchHero} />} />
              </Switch>
            </main>
            <Footer />
          </div>
        )
      }
      
    }
export default App;
