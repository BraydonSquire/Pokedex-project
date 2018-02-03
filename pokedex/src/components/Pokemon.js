import React, {Component} from 'react';
import Nav from './Nav';
import {getPokemon} from './../ducks/reducer';
import {connect} from 'react-redux';


class Pokemon extends Component {
    constructor() {
        super()

        this.state = {
            pokemon: []
        }
    }


    componentDidMount() {
        this.props.getPokemon();
    }

    render() {
        return(
            <div className="pokemon-container">
            <Nav />
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