import React from 'react'
import { Link } from "react-router-dom"

//this will be the section where all of the hero pics will be held
//again, like my binder of marvel superhero playing cards in the early 90's

//setting up the function and giving it props
function Heroes(props) {
    console.log(props.heroes)

    //setting up the allHeroes which will be the map of chars rendered in our screen
    const allHeroes = props.heroes.map(hero => {
        return (
            <Link to={`/${hero.hero_id}`} key={hero.id}>
                <div className="heroCard">
                    <img src={hero.image_url} alt={hero.name}/>
                    <h3>{hero.name}</h3>
                </div>
            </Link>
        )
    })
   //returning our heroes here
    return (
        <div className="heroes">
            {allHeroes}
        </div>

    )
}

export default Heroes