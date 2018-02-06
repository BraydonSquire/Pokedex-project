import React, {Component} from 'react';
import Nav from './Nav';
import {getPokemon} from './../ducks/reducer';
import {connect} from 'react-redux';
import axios from 'axios';


class Pokemon extends Component {
    constructor() {
        super()

        this.state = {
            pokemon: [{sprites: {
                front_default:null
            }}]
        }
        // this.getPokemon = this.getPokemon.bind(this)
        this.scrapeData = this.scrapeData.bind(this)
    }

    // getPokemon(){
    //     axios.get('http://pokeapi.co/api/v2/pokemon/?limit=40').then( res => {
    //         return res.data
    //         this.setState({pokemon:res.data})
    //         console.log('i did a thing')
    //     })
    // }

    componentDidMount() {
       this.props.getPokemon()
       console.log(this.props.pokemon,"pokemon data")
    }

    scrapeData() {
        for (let i = 0; i< this.props.pokemon.length; i++) {
            axios.put('api/scrapedata',this.props.pokemon[i].name)
        }
        
    }


    

    render() {
        const pokemon = this.props.pokemon;
        let list = pokemon.map( (pokemon, i) => {
            return(
                <div className="pokemon-item">
                    <p>{pokemon.name}</p>
                </div>
            )
        } )

        return(
            <div className="page-container">
            <Nav />
            <button onClick={this.scrapeData()}>scrape DATA</button>
            <div className="pokemon-container">
            {/* <button onClick={() => this.props.getPokemon()}>click me</button> */}
            {list}
            </div>
        </div>
        )
       
    }

}

function mapStateToProps(state) {
    return{
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {getPokemon})(Pokemon);