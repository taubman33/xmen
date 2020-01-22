import react, { Components} from react


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