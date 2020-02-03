import React from 'react'
import axios from 'axios'

const URL = 'https://superheroapi.com/api/10108849220667698/'
const superAPI = 'https://basic-superhero-api.herokuapp.com/superheros'
const accessToken = "10108849220667698";


class Profile extends React.Component{

    constructor(props){
        super(props)
        this.state={
            hero:{},
        }
    }

    //we are recruiting heroes in like Apocalypse arming his horsemen
    fetchInfo = async()=>{
        //so the id is the character clicked
        const heroID = this.props.navProps.match.params.id
    let response = await axios.get(`${URL}${heroID}`)
    const data = response.data
    this.setState({
        hero: data
    })
    }

    //getting the info in when it loads up properly so we can Juggernaut it onto the screen
    componentDidMount(){
        this.fetchInfo()
        console.log(`profile working,  ${this.props}`)
      }


      //rendering info onto the screen
      //like holograms in the Danger Room
    render(){

        if(!this.state.hero.name){
            return (
                <div className="loadingScreen"><p>Wait up, bub!</p></div>
            )
        }


        return(
        <div className = "heroCard">
        <h1>{this.state.hero.name}</h1>
        <h1>Real Name:{this.state.hero['full-name']}</h1>

        <div className="heroStats">
            <h2>Stats:</h2>

         <ul className="stats">
                <li>Intelligence: {this.state.hero['intelligence']}</li>
                 <li>Strength: {this.state.hero['strength']}</li>
                 <li>Speed: {this.state.hero['speed']}</li>
                 <li>Durability: {this.state.hero['durability']}</li>
                 <li>Power: {this.state.hero['power']}</li>
                 <li>Combat: {this.state.hero['combat']}</li>
             </ul>

           </div>

         <img src= {this.state.hero.image.URL} alt="heroImage"></img>

         </div>

       )
    }
}

export default Profile 