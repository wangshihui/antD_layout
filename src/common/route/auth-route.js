import React, {Component} from 'react';
import {Route, withRouter, Switch} from "react-router";
import { combineReducers, createStore } from 'redux'
import { bindActionCreators } from 'redux';
import authFunc from "../../business/auth" 

class AuthRoute extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const {component: Component,...rest} = this.props;

        return <Route {...rest}> </Route>
    }
}