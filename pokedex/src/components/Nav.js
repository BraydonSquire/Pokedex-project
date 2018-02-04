import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserInfo} from './../ducks/reducer';

class Nav extends Component {
    constructor(){
        super()

        this.state = {
            loggedIn:false,
            userInfo:[]
        }
    }


    componentDidMount(){
        //  this.props.userInfo === [] ?
        //   console.log('Not logged in', this.props.userInfo) 
        //   : this.setState({loggedIn:true}) && this.props.getUserInfo()
        // this.props.getUserInfo
        if (this.state.loggedIn == false) {
            console.log('Not logged in', this.props.userInfo) 
        } else {
            console.log(this.state.userInfo)
        }

        this.props.userInfo != null ? console.log('logged in') && this.setState({loggedIn:true}) : console.log('nope')

    }

    render() {
        return(
            <div className="title">
            <div>
                <h1>PokeDex</h1>
                </div>
            <div className="navbar-container">
                <Link to="/pokemon"> <div className="nav-item">Pokemon</div> </Link>
                {this.props.userInfo !== {} ? <p> {this.props.userInfo.user_name} </p> : null}
                {this.props.userInfo.img != null ? <img className="profile-photo" src={this.props.userInfo.img} /> : null}
                {this.props.userInfo.user_name != null ? <a href={process.env.REACT_APP_LOGOUT}> <div className="nav-item">Logout</div></a> : <a href={ process.env.REACT_APP_LOGIN }><div className="nav-item">Login</div></a> }
                   
            
            </div>
            </div>
        )
    }
}
function mapStateToProps(state){
    return {
        userInfo:state.userInfo
    }
}
export default connect(mapStateToProps, {getUserInfo})(Nav);