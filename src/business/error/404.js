import React, {Component} from 'react';
import {withRouter,Switch,Route} from "react-router";
import { Result, Button } from 'antd';
class Error404 extends Component{
   state={a:1};
   constructor(props){
       super(props);
       this.state={a:1};
   }
    // UNSAFE_componentWillMount(){
    //     window.confirm("error");
    // }
    render(){
        const msg=`Sorry, the page ${this.props.match.path} you visited does not exist.`;
        return (<Result 
            status="404"
            title="404"
            subTitle={msg}
          />
          );
    }
    
}
export default withRouter(Error404)