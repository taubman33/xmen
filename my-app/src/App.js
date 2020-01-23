import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Header from './components/Header'
import Heroes from './components/Heroes'
import Footer from './components/Footer'
import Profile from './components/Profile'


const URL = 'https://superheroapi.com/api/1010884922066769'
const superAPI = 'https://basic-superhero-api.herokuapp.com/superheros'
const accessToken = "10108849220667698";

//app
//header
// heroes -> profile
//footer


//this is becomming easier to write and understand the same way that loops in js did. practice
//setting up the app head so everything can fly in here like the Blackbird

class App extends React.Component {
  constructor (props){
    super(props)
    this.state={
      //the heroes are in an array, while each individual hero is an object
      //like action figures on my bookshelf in 1991
      characters:[]
    }
  }


      //we are going to use Cerebro to find every hero on earth
      //no we aren't, were going to use async and a fat arrow, which is just as cool

          

      fetchHeroes = async () => {
        const response = await axios.get('https://basic-superhero-api.herokuapp.com/superheros')
        const data= response.data
        this.setState({
          characters: data
        })

      }

        componentDidMount(){
          this.fetchHeroes()
        }

        render(){
          console.log(this.state.characters)
        return(
        <div className="App">

        <main>
        
        <Header/>

        <Route
        exact path= '/'
        component= {
        ()=> <Heroes newHero={this.state.characters}/> 
        }/>

        <Route
        exact path= '/:id'
        component={
          (navProps)=> <Profile navProps={navProps} />
        }/>

        <Footer/>
        </main>


     </div>
     
   )
  }
}

export default App
