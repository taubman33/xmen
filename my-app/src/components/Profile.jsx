import React from 'react'


//this is where we will link the individual hero profiles when they are clicked


function Profile(props) {

    props.fetchHero(props.match.params.hero_id)

    while (props.hero.id !== props.match.params.hero_id) { 
        return <p>Loading...</p>
    }    

    const { name, biography, powerstats } = props.hero
    //setting up the hero card to display name and stats. keeping the '' around the name to keep it recognized as a string
    return (
        <div className="profile">
            <img src={props.hero.image.url} alt={name}/>
            <div className="profile-details">
                <h2>{name}</h2>
                <p>Real Name: {biography['full-name']}</p> 
                <ul>
                    <li>Intelligence: {powerstats.intelligence}!</li>
                    <li>Strength: {powerstats.strength}!</li>
                    <li>Speed: {powerstats.speed}!</li>
                    <li>Durability: {powerstats.durability}!</li>
                    <li>Power: {powerstats.power}!</li>
                    <li>Combat: {powerstats.combat}!</li>
                </ul>
            </div>
        </div>
    )

}

export default Profile