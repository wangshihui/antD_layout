import { createActions, handleActions } from "redux-actions"

const defaultState={
    loginstatus:false
}

const {login,logout} = createActions({
    "LOGIN":payload=>payload,
    "LOGOUT":payload=>payload,
});

const authentication= handleActions({
    [login]:(state)=>{
        return {...state,loginstatus:true}
    },
    [logout]:(state)=>{
        return {...state,loginstatus:false}
    }
},defaultState)

const actions={login,logout}
export {authentication}
export {actions}
