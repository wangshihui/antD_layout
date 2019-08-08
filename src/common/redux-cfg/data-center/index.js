import { combineReducers, createStore } from 'redux'
import {reducers}  from "../reducer_action" 
console.log(reducers)

 const globalDataCenter=createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
 export default globalDataCenter