import React, {Component} from 'react';
import {withRouter,Switch,Route} from "react-router";
import { Skeleton } from 'antd';


function Welcome({match}){
    return (<React.Fragment>
        <div>this the index page {match.url}  {match.path}</div>
        <Skeleton avatar paragraph={{ rows: 4 }}> </Skeleton>
       </React.Fragment>);
}
export default withRouter(Welcome)