import React from 'react'
import {NavLink} from 'react-router-dom'


//this will be the section where all of the hero pics will be held
//again, like my binder of marvel superhero playing cards in the early 90's

//setting up the function and giving it props

function Heroes(props){
     //returning our heroes here
    return(
        <div className= "hero">
            {props.newHero.map(hero => (
                <NavLink className= 'newHero' to={`/${hero.hero_id}`}>
                <h1>{hero.name}</h1>
                <img className= 'photos' src= {hero.image_url}/>
                </NavLink>
            ))}
        </div>
    );

}

export default Heroes