import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AppLayout from "./common/layouts/antd_menu/app_layout"
import AppRouter from "./common/route/app-router"

class App extends Component {
  render() {
    return (
      <AppLayout></AppLayout>
    );
  }
}
export default App;
