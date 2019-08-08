import { createActions, handleActions } from "redux-actions"

defaultState={
    loginstatus:false
}

export const actions={login,logout} = createActions({
    "LOGIN":payload=>payload,
    "LOGOUT":payload=>payload,
});

export const {authentication}= handleActions({
    [login]:(state)=>{
        return {...state,loginstatus:true}
    },
    [logout]:(state)=>{
        return {...state,loginstatus:false}
    }
},defaultState)