import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import panda from '../assets/Panda_logo.png';
import logo from '../assets/logo_color.png';

import './LaunchingPage.css';

class LaunchingPage extends Component{

    state={
        isVisible: true,
    }

    componentDidMount(){
        setTimeout(()=>this.setState({isVisible:false}) ,3000)
    }
    render(){
        if (!this.state.isVisible){
            return <Redirect to='/connexion' />
        }
        return(
            <div className="launchingPageContainer">
                    <img className="logo" src={logo} alt="logo_panda" />
                    <img className="panda" src={panda} alt="logo_oko" />
            </div>

        )
    }
}

export default LaunchingPage;

