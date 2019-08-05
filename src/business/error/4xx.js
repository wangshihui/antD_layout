import React, {Component} from 'react';
import {withRouter,Switch,Route} from "react-router";
function Welcome({match}){
    return (<div>this the 4xx page {match.url}  {match.path}</div>);
}
export default withRouter(Welcome)