import React, {Component} from 'react';
import axios from 'axios';
import Nav from './Nav';
import { getUserInfo, getPokemon } from '../ducks/reducer';
import { connect } from 'react-redux';

class Home extends Component {

constructor() {
    super();

    this.state = {
        pokemon: [],
        photo: []
    }
}    

componentDidMount(){
    this.props.getUserInfo()
    this.props.getPokemon()
    // const pokeapi = 'http://pokeapi.co/api/v2/';
    // () => axios.get(`${pokeapi}pokemon/1`).then(res => {this.setState({pokemon:res.data}), console.log(this.state.pokemon)})
}

    render() {
        const user = this.props.userInfo;
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

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo,
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, { getUserInfo, getPokemon })(Home);