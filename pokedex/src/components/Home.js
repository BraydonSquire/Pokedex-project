import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';


class Home extends Component {

constructor() {
    super();

    this.state = {
        pokemon: [],
        photo: []
    }
}    

componentDidMount(){
    const pokeapi = 'http://pokeapi.co/api/v2/';
    () => axios.get(`${pokeapi}pokemon/1`).then(res => {this.setState({pokemon:res.data}), console.log(this.state.pokemon)})
}

    render() {
        const pokeapi = 'http://pokeapi.co/api/v2/';
        return(
            <div>
                
                <Nav />
                <button onClick={ () => axios.get(`${pokeapi}pokemon/1`).then(res => {this.setState({pokemon:res.data, photo:res.data.sprites.front_default}), console.log(this.state.pokemon, this.state.photo)})}>Get Pokemon</button>
                <div>
                    {this.state.pokemon.name}
                </div>
                <div>
                   <img src={this.state.photo} />
                </div>
            </div>
        )
    }
}

export default Home;