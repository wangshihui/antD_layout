import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route} from "react-router-dom";
import routerCfgs,{notFoundPage} from "./common/route/app-router"
import {AppLayOutWithRouter} from "./common/layouts/antd_menu/app_layout"
import store from "./common/redux-cfg/data-center"
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    console.log(store);
    return (
        <BrowserRouter>
            {routerCfgs.map(
              (routCfg,index)=>{
                if (routCfg.path && !routCfg.ismenue) {
                      const componet = (routCfg.componet) ? routCfg.componet : notFoundPage;
                      return <Route key={index} path={routCfg.path} exact={routCfg.exact===false?false:true}  component={componet} />
                    }
              }
            )}
        </BrowserRouter>
      
    );
  }
}
export default App;