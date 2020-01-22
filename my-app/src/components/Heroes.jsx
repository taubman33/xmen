import react, { Components} from react

//this will be the section where all of the hero pics will be held

class Heroes extends Component {
    render (){
        const allHeroes = this.props.heroes.map( (hero, index) => (
            <Profile hero={hero} key={hero.id} /> 
        ))
    return (
        <div className="Heroes">
            <h1 claesname ="heroes1"> Heroes</h1>
            {allHeroes}
        </div>

    );
  }
}
export default Heroes