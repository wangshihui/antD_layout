import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from "./common/layouts/antd_menu/app_layout"
import {AppLayOutWithRouter} from "./common/layouts/antd_menu/app_layout"
import {entry_index} from "./common/route/app-router"
import { BrowserRouter} from "react-router-dom";

class App extends Component {
  render() {
    return (
       <BrowserRouter>
         <AppLayOutWithRouter match={{ params: "", url: "isaasd",path:"2qweqwe" }}></AppLayOutWithRouter>
      </BrowserRouter>
    );
  }
}
export default App;
