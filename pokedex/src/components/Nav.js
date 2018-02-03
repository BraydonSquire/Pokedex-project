import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

    render() {
        return(
            <div className="title">
            <div>
                <h1>PokeDex</h1>
                </div>
            <div className="navbar-container">
                <Link to="/pokemon"> <div className="nav-item">Pokemon</div> </Link>
                <a href={ process.env.REACT_APP_LOGIN }><div className="nav-item">Login</div></a>   
            </div>
            </div>
        )
    }
}
export default Nav;